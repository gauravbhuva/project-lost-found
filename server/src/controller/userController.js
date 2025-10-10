import { notFoundResponse, successResponse, successResponseWithData,errorResponse } from "../utils/apiResponse.js"
import tryCatchAsync from "../utils/tryCatchAsync.js"
import setTokenCookie  from "../utils/setTokenCookie.js";
import userService from "../services/userService.js";

const createUser = tryCatchAsync(async (req, res) => {
  const {user,token} = await userService.createUser(req.body);
  
   setTokenCookie(res, token);

  return successResponseWithData(res,"user created.",user)
});

const getUser = tryCatchAsync(async (req, res) => {

  const id = req.params.id;

  if(!id) return errorResponse(res,"User id is required");

  const user = await userService.getUser(req.params.id);
  if(!user){
    return notFoundResponse(res,"User not found");
  }

  delete user?.password;

  return successResponseWithData(res,"user found.",user);
});

const getUsers = tryCatchAsync(async (req, res) => {
  const users = await userService.getUsers();
  if(!users.length > 0){
    return notFoundResponse(res,"User not found");
  }
  return successResponseWithData(res,"user found.",users);
});

const updateUser = tryCatchAsync(async (req, res) => {
  const id = req.user?.id

  if(req.file){
    const folder = process.env.CLOUDINARY_USER_FOLDER;
    const result = await uploadToCloudinary(req.file.buffer, folder,req.file.originalname);

   const data = await userService.updateUser(id, { profileImage: result.secure_url } );

    if(data){
        return successResponseWithData(res,"user profile updated successfully.",data)
    }

    return errorResponse(res,"something went wrong!")
  }
  
  
  const user = await userService.updateUser(id, req.body);

  if(user){
     return successResponseWithData(res,"user update successfully.",user)
  }
  
 return errorResponse(res,"something went wrong!")
});

const deleteUser = tryCatchAsync(async (req, res) => {

  const id = req.params.id

   await userService.deleteUser(id);
  
  return successResponse(res,"user deleted successfully.")
});

export default {
  createUser,
  getUser,
  getUsers,
  updateUser,
  deleteUser,
};