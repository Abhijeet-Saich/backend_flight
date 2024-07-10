import express from 'express';
import flightCol from '../models/flightModel.js';

const router = express.Router();


router.post('/addNew',async (req,res)=>{

    try {
        req.body.vendorName = "Indigo";
        req.body.vendorLogoUrl = "https://logos-world.net/wp-content/uploads/2023/01/IndiGo-Logo.png"
        const newFlight = new flightCol(req.body);
        await newFlight.save();
        res.send(newFlight);
    } catch (error) {
        console.log(error.message);
        res.send(error.message);
    }
})


export default router