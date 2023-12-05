import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Tours = () => {
  const [tour, setTour] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/getTours')
      .then(response => {setTour(response.data);
      console.log(response.data)})
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <div>Hotel Name</div>
      <div>Price</div>
      <div>Rating</div>
      <div>Location</div>
      {tour.map(eachtour => (
        <div key={eachtour._id}>
          <div>{eachtour.Name}</div>
          <div>{eachtour.Duration}</div>
          <div>{eachtour.Sites}</div>
      </div>
      ))}
    </div>
  );
};
