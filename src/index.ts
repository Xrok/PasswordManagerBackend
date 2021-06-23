import express from 'express';
import mongoose from 'mongoose';
import { userRouter } from './routes/user.route';
import bodyParser from 'body-parser';
import { loggerMiddleware } from './middleware/logger.middleware';
import { coreRouter } from './routes/core.route';
import dotenv from 'dotenv';

dotenv.config();

const { ENVIRONMENT, MONGO_URL_ATLAS, MONOGO_URL_LOCAL, SERVER_PORT } = process.env;

const MONGO_URL = ENVIRONMENT == 'development' ? MONOGO_URL_LOCAL : MONGO_URL_ATLAS;

const app = express();
app.use(bodyParser.json());
app.use(loggerMiddleware);

app.get('/', (req, res) => {
    res.send('Hello world!');
});
app.use(coreRouter);
app.use('/user', userRouter);

mongoose.connect(
    MONGO_URL,
    {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    () => {
        console.log('connected to database');
    }
);

// start the Express server
app.listen(process.env.PORT || SERVER_PORT, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${process.env.PORT || SERVER_PORT}`);
});
