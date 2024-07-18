import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CartsWines from '../components/CartsWines';
import { API_BASE_URL } from '../utils/config'
 
const WinesType = () => {
  const { type } = useParams();
  const [wineType, setWineType] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getWineType();
  }, []);

  const getWineType = async () => {
    try {
      const response = await axios.get(
        // 'https://wineder-app.onrender.com/api/products/all'
        `${API_BASE_URL}/api/products/all`
      );
      const filteredWines = response.data.filter(wine => wine.wineDescription !== null && wine.wineDescription.wineType === type);
      console.log(filteredWines)
      setWineType(filteredWines);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);

  }, []);


  return (
    <div>
      {loading ? (

        <div className='flex items-center justify-center w-full h-screen bg-[#232323]'>
          <img className='w-[300px]' src="./assets/copa.gif" alt="" />
        </div>) : (
        <div className=' min-h-[80vh]'>
          <h2 className='text-2xl text-center lg:text-4xl lg:my-5'>WinesType - {type}</h2>
          <div className='flex flex-wrap justify-center gap-5 my-5 relative z-10  lg:mx-6'>
            {wineType.map(wine => (
              <CartsWines key={wine.id} id={wine.id} name={wine.name} price={wine.price} winery={wine.provider} image={wine.image} bgColor={wine.wineDescription.wineType}></CartsWines>
            ))}
          </div>
        </div>)}

    </div>
  );
};

export default WinesType;
