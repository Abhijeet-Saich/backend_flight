import express from 'express';
import cityCol from '../models/cityModel.js';

const router = express.Router();



router.get('/',async (req,res)=>{
    try {
        const allCities = await cityCol.find();
        console.log(allCities);
        res.send({
            context : "List of all cities",
            data : allCities
        });
    } catch (error) {
        res.send(error.message);
    }
})

router.post('/',async (req,res)=>{
    try {
        const {id : cityId,cityName} = req.body;
        const newCity = new cityCol({cityId,cityName});
        const savedCity = await newCity.save();
        res.send(savedCity);

    } catch (error) {
        res.send(error.message);
    }
})


export default router;