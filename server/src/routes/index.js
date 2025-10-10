import express from 'express'
import authRoute from './authRoute.js';
import userRoute from './userRoute.js'


const Router = express.Router()

Router.use('/user', userRoute);
Router.use('/auth', authRoute);



export default Router