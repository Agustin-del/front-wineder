import React from 'react'
import TextWineDetails from '../components/TextWineDetails'
import CartsWines from '../components/CartsWines'
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const Client = () => {
  const [client, setClient] = useState([])
  const token = useSelector(store => store.authReducer.token)
  const role = useSelector(store => store.roleReducer.role)
  const[loading, setLoading] = useState(true);
  
  const getData = async () => {
    try{
      const response = await axios.get('http://localhost:8080/api/auth/current', 
        { headers: { 'Authorization': `Bearer ${token}` } });

      setClient(response.data)
      console.log(response.data);
    }
    catch(error){
      console.log(error)
    }  
    setLoading(false)
  }
  
  useEffect(() => {
    getData();
  }, [token]);

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
                </div>) : (<>

      <h2 className='text-3xl text-center lg:text-5xl lg:mt-5'><strong>Welcome {client.name} {client.lastName}!</strong></h2>
      {/*        
        <section className="my-5">
                    <div className="flex justify-center">
                        <video className="w-[90%] max-w-xl" autoPlay loop muted>
                            <source src="./assets/videoSirviendoCopa.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </section> */}

      <div>

      <h3 className='text-2xl text-center pt-5 lg:text-3xl italic'>Recent Purchases</h3>
      <section className='flex flex-wrap justify-center gap-5 my-5 relative z-10'>
        <CartsWines bgColor="RED" image="./assets/vino-tinto.png" name="Wine name" price="100.00" />
        <CartsWines bgColor="PINK" image="./assets/vino-rosado.png" name="Wine name" price="100.00" />
        <CartsWines bgColor="WHITE" image="./assets/vino-blanco.png" name="Wine name" price="100.00" />
        <CartsWines bgColor="PINK" image="./assets/vino-rosado.png" name="Wine name" price="100.00" />

      </section>

      </div>



{/* 
      <section className="my-5">
        <div className="flex justify-center">
          <video className="w-[90%] max-w-xl" autoPlay loop muted>
            <source src="./assets/videoClientPromo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section> */}

   
      <img className=' w-[90%] flex items-center mx-auto mb-5 lg:w-[70%]  shadow-[0_3px_10px_rgb(0,0,0,0.2)] ' src="./assets/imgClient.jpg" alt="" />

      </>
      )}
    </div>
  )
}

export default Client