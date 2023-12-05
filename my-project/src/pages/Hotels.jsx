'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Button } from '@nextui-org/react';

export const Hotels = () => {
  const [hotel, setHotel] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:3001/getHotels')
      .then(response => {setHotel(response.data);
      console.log(response.data)})
      .catch(err => console.log(err));
  }, []);

  const[rooms,setRooms] = useState(1);
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut,setCheckOut] = useState(new Date());
  const [selectedHotel,setSelectedHotel] = useState({
    hotelname: 'Sahara Star',
    hotelprice: 5000,
    hotelcity: 'Mumbai'
  })

  const handleRoomChange = (event) => {
    const value = event.target.value;
    setRooms(value);
  }

  const handleCheckIn = (checkIn) => {
    setCheckIn(checkIn)
  }

  const handleCheckOut = (checkOut) => {
    setCheckOut(checkOut)
  }

  const duration = checkOut.getDate() - checkIn.getDate() + 1;

  const handleRoomSubmit = () => {
    
    console.log(rooms);
    console.log(checkIn);
    console.log(checkOut);
    console.log(duration);
  }

  const handleBookHotel = (Name,Priceperday,City) => {
   setSelectedHotel({
    hotelname: Name,
    hotelprice: Priceperday,
    hotelcity: City
   })
  }

  useEffect(() => {
    console.log('Hotel booked:', selectedHotel);
  }, [selectedHotel]);

  return (
    <div class="w-full h-screen font-[Poppins]">
      <div class="flex flex-row gap-8 h-16 bg-blue-800 justify-center align-middle items-center m-5 rounded-xl">
        <div class="flex flex-row justify-center align-middle items-center gap-2 ">


          <div class="bg-white p-1 bg-opacity-25 text-white rounded-xl px-2">Check In</div>
          <div class="pt-2 pb-2">
              <DatePicker selected={checkIn} onChange={handleCheckIn} />
          </div>
        </div>

        <div class="flex flex-row justify-center align-middle items-center gap-2 ">
          <div class="bg-white p-1 bg-opacity-25 text-white rounded-xl px-2">Check Out</div>
          <div class="pt-2 pb-2">
              <DatePicker selected={checkOut} onChange={handleCheckOut} />
          </div>
        </div>
        

        <div class="flex flex-row justify-center align-middle items-center gap-2">
        <div class="bg-white p-1 bg-opacity-25 text-white rounded-xl px-2">Rooms</div>
          <input class="appearance-none h-10 block w-20 bg-white text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number"
          value={rooms}
          onChange={handleRoomChange}
          placeholder="rooms"
          />
        </div>

        <Button
        color="secondary"
        onClick={handleRoomSubmit}
        >Modify</Button>
      </div>
      <div class="flex flex-row">
      <div class="flex flex-col gap-0">
        {hotel.map(eachhotel => (
        <div key={eachhotel._id} id="hotel-card" class="h-[250px] w-[700px] mt-10 border-2 border-black ml-7 rounded-xl flex flex-row shadow-lg">
          <div class="h-[150px] w-[210px]  ml-7 rounded-xl mt-8" id="hotel-picture">
            <img class="h-full w-full object-cover rounded-xl " src={eachhotel.img}></img>
          </div>
          <div class="flex flex-col ml-12">
            <div class="flex flex-row mt-7 justify-start items-center">
              <div class="font-extrabold text-2xl">{eachhotel.Name}</div>
              <div class="ml-5 text-gray-700">{eachhotel.City}</div>
            </div>
            <div class="break-words mt-3 font-semibold">Spacious rooms with breathtaking views</div>
            <div class="flex flex-row mt-3 gap-3">
                <div>Beds: 2</div>
                <div>People: 4</div>
            </div>
            <div class="flex flex-row gap-56  mt-2 mr-3 ">
              <div class>{eachhotel.Rating}</div>
              <div class="text-2xl font-bold">Rs. {eachhotel.Priceperday}</div>
            </div>
            <button class="border-1 border-black p-1 w-28 rounded-xl hover:bg-red-400"
            onClick={() => handleBookHotel(eachhotel.Name,eachhotel.Priceperday,eachhotel.City)}
            >Book Now</button>
          </div>
        </div>
        ))}
      </div>
      <div class="h-[490px] w-[360px] border-4 border-black rounded-xl mt-10 ml-20 flex flex-col align-middle items-center bg-emerald-300 shadow-2xl	">
          <div class="text-2xl font-semibold mt-3">Booking Confirmation</div>
          <div class="flex flex-row gap-28 mt-10">
            <div class="flex flex-col">
              <div class="font-semibold">Check in:</div>
              <div>{checkIn.toLocaleDateString()}</div>
            </div>
            <div class="flex flex-col">
              <div class="font-semibold">Check out:</div>
              <div>{checkOut.toLocaleDateString()}</div>
            </div>
          </div>
          <div class="mt-5 font-semibold">Total Days: {duration}</div>
          <div class="mt-4 text-2xl font-semibold">{selectedHotel.hotelname}</div>
          <div>{selectedHotel.hotelcity}</div>
          <div class="flex flex-col mt-5">
            <div>Price per night: {selectedHotel.hotelprice}</div>
            <div class="mt-1">{selectedHotel.hotelprice} x {duration} night/s = {selectedHotel.hotelprice*duration}</div>
            <div class="mt-1">Rooms Booked: {rooms}</div>
          </div>
          <div class="mt-10 mb-2 text-2xl font-bold">Grand Total: Rs. {selectedHotel.hotelprice*duration*rooms}</div>
          <Button>Book Now</Button>
      </div>
      </div>

    </div>
  );
}



