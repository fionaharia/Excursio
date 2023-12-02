const mongoose = require('mongoose');

const HotelSchema = new mongoose.Schema({
      Name: String,
      Price: String,
      Rating: String,
})

const HotelModel = mongoose.model("hotelsdbs",HotelSchema)
module.exports = HotelModel