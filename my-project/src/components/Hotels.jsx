import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Hotels = () => {
  const [hotel, setHotel] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/getHotels')
      .then(response => {setHotel(response.data);
      console.log(response.data)})
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <div>Hotel Name</div>
      <div>Price</div>
      <div>Rating</div>
      <div>Location</div>
      {hotel.map(eachhotel => (
        <div key={eachhotel._id}>
          <div>{eachhotel.Name}</div>
          <div>{eachhotel.City}</div>
          <div>{eachhotel.Rating}</div>
      </div>
      ))}
    </div>
  );
};
