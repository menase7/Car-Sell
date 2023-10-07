import React, { useContext, useEffect, useState } from "react";
import CarCard from "./CarCard";
import axios from "axios";

const Morecars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/cars')
      .then(response => {
        setCars(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  return (
    <div className='w-[90%] mx-auto mt-20'>
      <div className='cartItems grid max-lg:grid-cols-2 lg:grid-cols-3'>
      {cars.map(car => (
            <CarCard data={car} />
           )) }
      </div>
    </div>
  )
}

export default Morecars
