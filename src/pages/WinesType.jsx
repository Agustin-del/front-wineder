import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CartsWines from '../components/CartsWines';

const WinesType = () => {
  const { type } = useParams();
  const [wineType, setWineType] = useState([]);

  useEffect(() => {
    getWineType();
  }, []);

  const getWineType = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/products/all');
      const filteredWines = response.data.filter(wine => wine.wineDescription !== null && wine.wineDescription.wineType === type);
      setWineType(filteredWines);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div>
      <h2 className='text-2xl text-center'>WinesType - {type}</h2>
      <div className='flex flex-wrap justify-center gap-5 my-5 relative z-10 '>
        {wineType.map(wine => (
          <CartsWines key={wine.name} name={wine.name} winery={wine.winery} price={wine.price} image={wine.image} wineDescription={wine.wineDescription} bgColor={wine.wineDescription.wineType}/>
        ))}
      </div>
    </div>
  );
};

export default WinesType;
