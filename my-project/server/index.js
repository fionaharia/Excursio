const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const HotelModel = require('./models/Hotelsdb');
const TourModel = require('./models/Toursdb')

const app = express();
app.use(cors({
  origin:'http://localhost:5173', 
  credentials:true,              //access-control-allow-credentials:true
  optionSuccessStatus:200
}));
app.use(express.json());



mongoose.connect("mongodb+srv://fionaharia:fiona1204@fionaharia.4xa6fnl.mongodb.net/hotels")
.then( () => {
  console.log('Database Connected')
})
.catch( (e) => {
  console.log("Couldnt connect to the Database" + e)
})

app.get('/getHotels', (req, res) => {
  HotelModel.find({})
    .then(hotelsdb => {res.json(hotelsdb)
    console.log(hotelsdb)})
    .catch(err => {res.json(err);
    console.log(err)});
});

app.get('/getTours', (req, res) => {
  TourModel.find({})
    .then(toursdb => {res.json(toursdb)
    console.log(toursdb)})
    .catch(err => {res.json(err);
    console.log(err)});
});

app.listen(3001, () => {
  console.log("Server is running");
});

