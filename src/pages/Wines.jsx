import React, { useEffect, useState } from 'react'
import CartsWines from '../components/CartsWines';
import axios from 'axios';


const Wines = () => {

    const [wines, setWines] = useState([]);

    useEffect (() => {
        getWines()
    }, [])

    const getWines = async () => {
        const response = await axios.get("http://localhost:8080/api/products/all")
        setWines(response.data)
    }
    
    return (
        <div className='flex flex-wrap justify-center gap-5 my-5 relative z-10'>
          
           {/* COMPONETE DE LAS CARD DE WINE, ESTA EN COMPONENTS-CartsWines.jsx  */}

            {}
           
           {/* <CartsWines name= 'Red Wines' winery='winery name' price='price' image='./assets/vino-tinto.png' bgColor='bg-[#5e2a30]'/>
           <CartsWines name= 'White Wines' winery='winery name' price='price' image='./assets/vino-blanco.png' bgColor='bg-[#D4B891]'/>
           <CartsWines name= 'Red Wines' winery='winery name' price='price' image='./assets/vino-rosado.png' bgColor='bg-[#DCC8C9]'/>
           <CartsWines name= 'Red Wines' winery='winery name' price='price' image='./assets/vino-espumante.png' bgColor='bg-[#D0C9BD]'/> */}
           
       
           
        </div>
    );
};

export default Wines;
