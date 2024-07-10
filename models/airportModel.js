import {Schema,model} from 'mongoose';

const airportSchema = new Schema({
    airportCode: {type : String , reqired : true , unique : true},
    airportId: {type : Number , reqired : true , unique : true},
    airportName: {type : String , reqired : true , unique : true},
    cityId: {type : Number , reqired : true},
    cityName: {type : String , reqired : true},
})

const airportCol = model("airport",airportSchema);

export default airportCol;