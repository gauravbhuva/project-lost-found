import express from "express";
import lostThingsController from "../controller/lostThingsController.js";
import authMiddleware from '../middleware/authControle.middleware.js';
import { lostThingSchema } from '../utils/validationSchema.js';
import validate from '../middleware/requestValidator.middlware.js';
import createUploader from '../middleware/multer.middleware.js';

const upload = createUploader([".jpg", ".jpeg"])

const Router = express.Router();

Router.post('/create',authMiddleware,upload.single("file"),lostThingsController.create);
Router.get('/all',authMiddleware,lostThingsController.getAll)


export default Router;
