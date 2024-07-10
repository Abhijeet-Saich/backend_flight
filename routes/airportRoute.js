import express from 'express';
import airportCol from '../models/airportModel.js';

const router = express.Router();


router.get('/',async (req,res)=>{
    try {
        const allPorts = await airportCol.find();
        // console.log(allPorts);
        res.send({
            context : "List of all ports",
            data : allPorts
        });
    } catch (error) {
        res.send(error.message);
    }
})

router.post('/', async (req,res)=>{
    try {
        console.log(req.body.data)
        const airportList = req.body.data;
        const response = await airportCol.insertMany(airportList);
        res.send(response)
    } catch (error) {
        console.log(error.message);
        res.send(error.message);
    }
})



export default router