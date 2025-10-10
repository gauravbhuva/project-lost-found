// controllers/auth.controller.js
import authService from "../services/authService.js";
import {
  successResponseWithData,
  successResponse,
  validationError,
} from "../utils/apiResponse.js";
import setTokenCookie from "../utils/setTokenCookie.js";
import tryCatchAsync from "../utils/tryCatchAsync.js";
import prisma from "../lib/prismaClient.js";
import { getDeviceInfo } from "../utils/deviceInfo.js";

const login = tryCatchAsync(async (req, res) => {
  const { email, password } = req.body;

  const { user, token } = await authService.loginUser(email, password);

  //  await setTokenCookie(res, token);

  const deviceData = getDeviceInfo(req);

  await prisma.loginHistory.create({
    data: {
      userId: user.id,
      ...deviceData,
    },
  });

  return successResponseWithData(res, "Login successful", { user, token });
});

const verifyToken = tryCatchAsync(async (req, res) => {
  const { resetToken } = req.params;

  if (!resetToken) {
    // const token = req.cookies?.token;
    const token = req.headers.authorization;
   
    const result = await authService.verifyToken(token);

    return successResponseWithData(res, "Token verified successfully", {
      user: result,
    });
  }
  const result = await authService.verifyToken(resetToken);
  return successResponseWithData(res, "Token verified successfully", {
    user: result,
  });
});

const logout = tryCatchAsync(async (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: false, // only over HTTPS
    sameSite: "strict", // optional but recommended
  });

  return successResponse(res, "Logout successful");
});

export { login, verifyToken, logout };
