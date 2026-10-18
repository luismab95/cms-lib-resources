import * as dotenv from 'dotenv';
dotenv.config();

export const config = {
  server: {
    nodeEnv: process.env.NODE_ENV,
    jwtSecretKey: process.env.JWT_SECRET_KEY,
    expiresIn: Number(process.env.JWT_EXPIRES_IN),
    msEmail: process.env.MS_EMAIL,
    frontendUrl: process.env.FRONTEND_URL,
    cryptoKey: process.env.CRYPTO_KEY,
    corsOrigin: process.env.CORS_ORIGIN,
  },
};
