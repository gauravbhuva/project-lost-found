
import prisma from '../lib/prismaClient.js'; // or wherever you export your prisma instance
import { unauthorizedResponse } from '../utils/apiResponse.js';

const requireRole = (...allowedRoles) => {
  return async (req, res, next) => {
    try {
      if (!req.user || !req.user.role) {
       return unauthorizedResponse(res, "User role not found in request.");
      }


      // 🔍 Fetch role from DB using roleId
      const role = await prisma.role.findUnique({
        where: { id: req.user?.role?.id },
        select: { name: true },
      });

     
      if (!role || !allowedRoles.includes(role.name)) {
        return unauthorizedResponse(res,"unauthorized access.");
      }

      next();
    } catch (err) {
      next(err);
    }
  };
};

export default requireRole;
