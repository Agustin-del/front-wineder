import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CartsWines from '../components/CartsWines';

const WinesType = () => {
  const { type } = useParams();
  const [wineType, setWineType] = useState([]);
  const [loading, setLoading] = useState(true);

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
    setLoading(false);
  };
  useEffect(() => {
    setTimeout(() => {
        setLoading(false);
    }, 2000);

}, []);


  return (
    <div>
      {loading ? (
                <div className='flex items-center justify-center w-full h-screen bg-[#232323]'>
                    <img className='w-[300px]' src="./assets/copa.gif" alt="" />
                </div>) : (
                <div>
      <h2 className='text-2xl text-center'>WinesType - {type}</h2>
      <div className='flex flex-wrap justify-center gap-5 my-5 relative z-10 '>
        {wineType.map(wine => (
         <CartsWines key={wine.id} id= {wine.id} name = {wine.name} price ={wine.price} winery={wine.provider} image='./assets/vino-tinto.png' bgColor={wine.wineDescription.wineType}></CartsWines>
        ))}
      </div>
    </div>)}
    </div>
  );
};

export default WinesType;
