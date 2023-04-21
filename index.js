import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import posts from './routers/posts.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const url = process.env.DATABASE_URL;
//mongodb+srv://admin:<password>@cluster0.itjsmfp.mongodb.net/?retryWrites=true&w=majority
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true, limit: '30mb'}));
app.use(cors())

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('connected to DB');
        app.listen(PORT, () => {
            console.log(`Sever is running on PORT ${PORT}`)
        })
    })
    .catch((err) => {
        console.log('err', err)
    })


// http://localhost: 5000
app.use('/posts', posts)