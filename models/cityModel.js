import {Schema,model} from 'mongoose';

const citySchema = new Schema({
    cityId : {
        type : Number,
        required : true,
        // unique : true
    },
    cityName : {
        type : String,
        required : true,
        unique : true
    }
})

const cityCol = model("city",citySchema);

export default cityCol;