'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Button } from '@nextui-org/react';

export const Toursnew = () => {
  const [tour, setTour] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/getTours')
      .then(response => {setTour(response.data);
      console.log(response.data)})
      .catch(err => console.log(err));
  }, []);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate,setEndDate] = useState(new Date());
  const [selectedTour,setSelectedTour] = useState({
    tourname: 'Goa',
    tourprice: 30000,
    tourcity: 'Goa'
  })

  const handleStartDate = (startDate) => {
    setStartDate(startDate)
  }

  const handleEndDate = (endDate) => {
    setEndDate(endDate)
  }

  const duration = endDate.getDate() - startDate.getDate() + 1;

  const handleTourSubmit = () => {
    
    console.log(startDate);
    console.log(endDate);
    console.log(duration);
  }

  const handleBookTour = (Name,Priceperday,City) => {
    setSelectedTour({
     tourname: Name,
     tourprice: Priceperday,
     tourcity: City
    })
   }

   useEffect(() => {
    console.log('Tour booked:', selectedTour);
  }, [selectedTour]);

  return (
    <div className="w-full h-screen font-[Poppins]">
      <div className="flex flex-row gap-8 h-16 bg-blue-800 justify-center align-middle items-center m-5 rounded-xl">
        <div className="flex flex-row justify-center align-middle items-center gap-2 ">


          <div className="bg-white p-1 bg-opacity-25 text-white rounded-xl px-2">Start date</div>
          <div className="pt-2 pb-2">
              <DatePicker selected={startDate} onChange={handleStartDate} />
          </div>
        </div>

        <div className="flex flex-row justify-center align-middle items-center gap-2 ">
          <div className="bg-white p-1 bg-opacity-25 text-white rounded-xl px-2">Check Out</div>
          <div className="pt-2 pb-2">
              <DatePicker selected={endDate} onChange={handleEndDate}/>
          </div>
        </div>

        <Button
        color="secondary"
        onClick={handleTourSubmit}
        >Modify</Button>
      </div>
      <div className="flex flex-row">
      <div className="flex flex-col gap-0">
        {tour.map(eachtour => (
        <div key={eachtour._id} id="tour-card" className="h-[250px] w-[700px] mt-10 border-2 border-black ml-7 rounded-xl flex flex-row shadow-lg">
          <div className="h-[150px] w-[210px]  ml-7 rounded-xl mt-8" id="tour-picture">
            <img className="h-full w-full object-cover rounded-xl " src={eachtour.img}></img>
          </div>
          <div className="flex flex-col ml-12">
            <div className="flex flex-row mt-7 justify-start items-center">
              <div className="font-extrabold text-2xl">{eachtour.Name}</div>
              <div className="ml-5 text-gray-700">{eachtour.City}</div>
            </div>
            <div className="break-words mt-3 font-semibold">Spacious rooms with breathtaking views</div>
            <div className="flex flex-row mt-3 gap-3">
                <div>Beds: 2</div>
                <div>People: 4</div>
            </div>
            <div className="flex flex-row gap-56  mt-2 mr-3 ">
              <div className>{eachtour.Rating}</div>
              <div className="text-2xl font-bold">Rs. {eachtour.Priceperday}</div>
            </div>
            <button className="border-1 border-black p-1 w-28 rounded-xl hover:bg-red-400"
            onClick={() => handleBookTour(eachtour.Name,eachtour.Priceperday,eachtour.City)}
            >Book Now</button>
          </div>
        </div>
        ))}
      </div>
      <div className="h-[490px] w-[360px] border-4 border-black rounded-xl mt-10 ml-20 flex flex-col align-middle items-center bg-emerald-300 shadow-2xl	">
          <div className="text-2xl font-semibold mt-3">Booking Confirmation</div>
          <div className="flex flex-row gap-28 mt-10">
            <div className="flex flex-col">
              <div className="font-semibold">Start date:</div>
              <div>{startDate.toLocaleDateString()}</div>
            </div>
            <div className="flex flex-col">
              <div className="font-semibold">End date:</div>
              <div>{endDate.toLocaleDateString()}</div>
            </div>
          </div>
          <div className="mt-5 font-semibold">Total Days: {duration}</div>
          <div className="mt-4 text-2xl font-semibold">{selectedTour.tourname}</div>
          <div>{selectedTour.tourcity}</div>
          <div className="flex flex-col mt-5">
            <div>Price per night: {selectedTour.tourprice}</div>
            <div className="mt-1">{selectedTour.tourprice} x {duration} night/s = {selectedTour.tourprice*duration}</div>
          </div>
          <div className="mt-10 mb-2 text-2xl font-bold">Grand Total: Rs. {selectedTour.tourprice*duration}</div>
          <Button>Proceed</Button>
      </div>
      </div>

    </div>
  );
};
