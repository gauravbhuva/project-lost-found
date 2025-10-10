import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import config from './config/appConfig.js';
import routes from './routes/index.js';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';


dotenv.config();

const app = express();

// middlewares
app.use(cors({
 origin: ['http://localhost:3000',],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(cookieParser());
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
app.use('/api/v1', routes);


app.listen(config.port, () => {
  console.log(`Server is running on port ${process.env.PORT || 5000}`);
});