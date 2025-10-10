// utils/setTokenCookie.js
const setTokenCookie = (res, token) => {
  res.cookie('token', `Bearer ${token}`, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'Strict',
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });
};

export default setTokenCookie;
