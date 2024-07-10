import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
import dotenv from 'dotenv';

//importing all the routes
import cityRoute from './routes/cityRoute.js';
import airportRoute from './routes/airportRoute.js'
import flightRoute from './routes/fligthRoute.js'



//configuring express server
const app = express();
dotenv.config()
app.use(express.json());
app.use(cors());


app.get('/',(req,res)=>{
    res.status(201)
    res.send("Server is well and running you can process your requests now!!!")
})


//Using routes
app.use('/cities',cityRoute);
app.use('/airports',airportRoute);
app.use('/flights',flightRoute)






//Starting server logic
const PORT = process.env.PORT || 3001 
app.listen(PORT,()=>{
     
    mongoose.connect(process.env.db_uri,{dbName : "flight_booking"}).then(() => console.log("Connected to mongooseDB successfully"))
                                                                    .catch((error) => console.log(error.message));

    console.log(`Server is running on PORT: ${PORT}`);
})