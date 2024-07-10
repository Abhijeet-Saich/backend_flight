import { Schema, model } from 'mongoose';

// Define the Flight schema
const flightSchema = new Schema({
  flightId: {
    type: Number,
    required: true,
    unique : true
  },
  flightNumber: {
    type: String,
    required: true,
  },
  arrivalTime: {
    type: String,
    required: true,
  },
  departureTime: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  totalSeats: {
    type: Number,
    required: true,
  },
  arrivalAirportName: {
    type: String,
    // required: true,
  },
  arrivalAirportId: {
    type: String,
    required: true,
  },
  departureAirportName: {
    type: String,
    // required: true,
  },
  departureAirportId: {
    type: String,
    required: true,
  },
  vendorName: {
    type: String,
    required: true,
  },
  vendorLogoUrl: {
    type: String,
    required: false, // This field is optional
  },
  travelDate: {
    type: Date,
    required: true,
  }
});

// Create the Flight model
const flightCol = model('flight', flightSchema);

export default flightCol;
