const appConfig = {
    port:process.env.PORT || 5000,
    dbUrl: process.env.DATABASE_URL,
    // jwtSecret: process.env.JWT_SECRET,
    // jwtExpiration: process.env.JWT_EXPIRATION || '1h',
    // email_user:process.env.EMAIL_USER,
    // email_pass:process.env.EMAIL_PASS
}

export default appConfig