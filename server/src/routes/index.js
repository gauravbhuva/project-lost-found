import express from 'express'
import authRoute from './authRoute.js';
import userRoute from './userRoute.js'
import errorHandler from '../middleware/errorHandler.js';


const Router = express.Router()

Router.use('/user', userRoute);
Router.use('/auth', authRoute);


Router.use(errorHandler)


export default Router