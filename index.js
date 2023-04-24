import { log } from 'console';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import posts from './routers/posts.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.port || 5000;

const URI = process.env.URL_DATABASE;

app.use(bodyParser.json({limit: '30mb'}));
app.use(bodyParser. urlencoded({extended: true, limit: '30mb'}))
app.use(cors());

app.use('/posts', posts)

mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        log('Connect to DB');
        app.listen(PORT, () => {
            log(`Sever is running on port ${PORT}`);
        });
    })
    .catch((err) => {
        log('err', err);
    });


