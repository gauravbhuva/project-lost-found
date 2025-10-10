import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import AppError from '../utils/apiError.js';
import userRepo from '../repository/userRepository.js';
import appConfig from '../config/appConfig.js';
import prisma from '../lib/prismaClient.js';


const loginUser = async (email, password) => {
  const user = await userRepo.getUserByIdOrEmail(email);

  if (!user) {
    throw new AppError(401, 'invalid email or password');
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    throw new AppError(401, 'invalid email or password');
  }

  delete user.password;
  // Generate JWT
  const token = jwt.sign(
    {
      id:user.id,
      email:user.email,
      role:{id:user.role.id}
    },
    process.env.JWT_SECRET,
    { expiresIn: appConfig?.jwtExpiration || '1h' }
  );

  return { user, token };
};

const verifyToken = async (token) => {
  try {

    if (!token) {
      throw new AppError(401, 'Token is required');
    }

    if (token.startsWith('Bearer ')) {
      
      token = token.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      if (!decoded) {
        throw new AppError(401, 'Invalid or expired token');
      }
      const result = await userRepo.getUserByIdOrEmail(decoded.id);
      delete result.password
      
      return result
    }

    const result = await prisma.user.findFirst({
      where: {
        reset_password_token: token,
        reset_password_expires: {
          gt: new Date(),
        },
      },
    });
    if (!result) {
      throw new AppError(401, 'Invalid or expired token');
    }

    delete result.password

    return result;

  } catch (error) {
    if (error instanceof AppError) {
      throw error; // re-throw your own custom errors
    }
    // otherwise wrap unexpected error
    throw new AppError(401, 'Invalid or expired token.');
  }
};

export default { loginUser, verifyToken };