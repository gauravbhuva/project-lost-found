
import userRepo from "../repository/userRepository.js";
import AppError from "../utils/apiError.js";
import bcrypt from "bcryptjs";
import prisma from "../lib/prismaClient.js";
import jwt from "jsonwebtoken";
import appConfig from "../config/appConfig.js";


function removeEmptyFields(obj) {
  return Object.fromEntries(
    Object.entries(obj).filter(([_, v]) => v !== "" && v !== null && v !== undefined)
  );
}



const createUser = async (userData) => {

  const existUser = await userRepo.getUserByIdOrEmail(userData?.email);
  

  if (existUser) {
    throw new AppError(400, 'User already exists with this email');
  }

  const hashedPassword = await bcrypt.hash(userData.password, 10);
  const userRole = await prisma.role.findUnique({
    where: { name: 'STUDENT' },
  });

  const newUser = {
    ...userData,
    password: hashedPassword,
    roleId: userRole?.id
  }

  const data = await userRepo.createUser(newUser);

  const token = jwt.sign(
    {
      id: data.id,
      name: data.firstName,
      email: data.email,
      roleId: data.roleId
    },
    process.env.JWT_SECRET,
    { expiresIn: appConfig?.jwtExpiration || '1h' }
  );

  return { user: data, token }
};

const getUser = async (id) => {
  const user = await userRepo.getUserByIdOrEmail(id);
  if (!user) throw new AppError(404,'User not found');
  return user;
};

const getUsers = async () => {
  return await userRepo.getAllUsers();
};

const updateUser = async (id, data) => {

  const { email, firstName, lastName, phoneNumber,profileImage, street, city, state, zipCode, country } = data;

  const userData = removeEmptyFields({ firstName, lastName, phoneNumber,profileImage });
  const addressData = removeEmptyFields({ street, city, state, zipCode, country });

  if(data.newPassword && data.currentPassword){

    console.log("===>",data);
    

    const currentPassword = await prisma.user.findUnique({
      where:{id},
      select:{password:true}
    }) 

    const isMatch = await bcrypt.compare(data.currentPassword,currentPassword.password)
    console.log("===>isMatch",isMatch);
    

    if(!isMatch) throw new AppError(401,"Invalid Current password!")

      const hashPass = await bcrypt.hash(data.newPassword,10);

    const result =  await prisma.user.update({
        where:{id},
        data:{password:hashPass}
      })

      return result;
  }

  const result = await userRepo.updateUser(id, {userData,addressData});

  delete result.password

  return result
};

const deleteUser = async (id) => {

  const isExist = await userRepo.getUserByIdOrEmail(id);
  
  if (!isExist) throw new AppError(404,'User not found');

  return await userRepo.deleteUser(id);
};

export default {
  createUser,
  getUser,
  getUsers,
  updateUser,
  deleteUser,
};