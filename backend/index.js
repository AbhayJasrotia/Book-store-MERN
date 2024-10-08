// import express, { request, response } from "express";
// import { PORT, mongoDBURL } from "./config.js";
// import mongoose from "mongoose";
// import { Book } from "./models/bookModel.js"

// const app = express();

// app.use(express.json());

// app.get('/',(request, response)=>{
//     console.log(request)
//     return response.status(234).send('Welcome Jaso')
// });

// app.post('/books',async(request, response)=>{
//     try {
//       if(
//         !request.body.title ||
//         !request.body.author ||
//         !request.body.publishYear
//       ) {
//         return response.status(400).send({
//             message: 'Send all required fields: title,author,publishYear',
//         });
//       }
//       const newBook = {
//         title: request.body.title,
//         author: request.body.author,
//         publishYear: request.body.publishYear,
//       };
//     } catch(error){
//         console.log(error.message);
//         response.status(500).send({message: error.message});
//     }
// });

// mongoose
//   .connect(mongoDBURL)
//   .then(() => {
//     console.log('App connect to database');
//     app.listen(PORT, () => {
//         console.log(`App is listening to port: ${PORT}`);
//     });
//   })
//   .catch((error) =>{
//     console.log(error);
//   });

import express, { request, response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
//import { Book } from "./models/bookModel.js";
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app = express();

// Middleware to parse JSON
app.use(express.json());

app.use(cors());
// app.use(
//     cors({
//         origin: 'http://localhost:3000',
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-Type'],
//     })
// );

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Welcome Jaso !');
});

app.use('/books', booksRoute);


mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
