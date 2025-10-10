import express from 'express';
import { registerSchema } from '../utils/validationSchema.js';
import validate from '../middleware/requestValidator.middlware.js';
import userController from '../controller/userController.js';
import authMiddleware from '../middleware/authControle.middleware.js';
import requireRole from '../middleware/rbac.middleware.js';
import createUploader from '../middleware/multer.middleware.js';

const upload = createUploader([".jpg", ".jpeg"])

const Router = express.Router();

Router.post('/create',validate(registerSchema),userController.createUser);
Router.get('/all',authMiddleware,requireRole('ADMIN'),userController.getUsers);
Router.get('/:id',authMiddleware,userController.getUser);
Router.put('/edit',authMiddleware,upload.single("file"),userController.updateUser)
Router.delete('/delete/:id',authMiddleware,requireRole('ADMIN'),userController.deleteUser);



export default Router;