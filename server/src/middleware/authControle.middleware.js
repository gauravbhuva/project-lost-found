import jwt from 'jsonwebtoken';
import { unauthorizedResponse } from '../utils/apiResponse.js';


const authMiddleware = (req, res, next) => {
//  let token = req.cookies?.token; // "Bearer eyJh..."

 let token = req.headers.authorization;
 

  if (!token || !token.startsWith("Bearer ")) {
    return unauthorizedResponse(res, "Authorization header or cookie missing");
  }

  token = token.split(' ')[1]
  // Check for Bearer toke

  try {
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;

      
    next();
  } catch (err) {
    return unauthorizedResponse(res, "Invalid or expired token");
  }
};

export default authMiddleware;