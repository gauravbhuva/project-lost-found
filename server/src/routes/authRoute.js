import express from "express";
import {login,verifyToken,logout} from "../controller/authController.js";

const Router = express.Router();

Router.post('/login', login);
Router.get('/verify-token', verifyToken); 
Router.post('/logout',logout);

export default Router;
