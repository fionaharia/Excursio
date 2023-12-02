const mongoose = require('mongoose');

const TourSchema = new mongoose.Schema({
      Name: String,
      Duration: String,
      Sites: String,
})

const TourModel = mongoose.model("toursdbs",TourSchema)
module.exports = TourModel