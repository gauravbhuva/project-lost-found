// utils/setTokenCookie.js
const setTokenCookie = async(res, token) => {
  console.log("===>",token);
  
  res.cookie('token', `Bearer ${token}`, {
    httpOnly: true,
    secure: true,
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });
};

export default setTokenCookie;
