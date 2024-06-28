import React, { useEffect, useState } from 'react'
import CartsWines from '../components/CartsWines';
import axios from 'axios';
import { Carousel } from "flowbite-react";



const Wines = () => {

    const [wines, setWines] = useState([]);
    const [loading, setLoading] = useState(true);


    const getWines = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/products/all")
            setWines(response.data)

        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }

    useEffect(() => {
        getWines()
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);

    }, []);


    return (
        <main>
            {loading ? (
                <div className='flex items-center justify-center w-full h-screen bg-[#232323]'>
                    <img className='w-[300px]' src="./assets/copa.gif" alt="" />
                </div>) : (

                <div className='flex flex-wrap justify-center gap-5 my-5 relative z-10'>

                    {/* COMPONETE DE LAS CARD DE WINE, ESTA EN COMPONENTS-CartsWines.jsx  */}

                    {wines.map(wine => {
                        if (wine.wineDescription !== null) {
                            return <CartsWines id={wine.id} name={wine.name} price={wine.price} winery={wine.provider} image='./assets/vino-tinto.png' bgColor={wine.wineDescription.wineType}></CartsWines>
                        }
                    })}
                    {/* <CartsWines name= 'Red Wines' winery='winery name' price='price' image='./assets/vino-tinto.png' bgColor='bg-[#5e2a30]'/>
           <CartsWines name= 'White Wines' winery='winery name' price='price' image='./assets/vino-blanco.png' bgColor='bg-[#D4B891]'/>
           <CartsWines name= 'Red Wines' winery='winery name' price='price' image='./assets/vino-rosado.png' bgColor='bg-[#DCC8C9]'/>
           <CartsWines name= 'Red Wines' winery='winery name' price='price' image='./assets/vino-espumante.png' bgColor='bg-[#D0C9BD]'/> */}


                    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 w-[80%] mx-auto ">

                    <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay>
                        <div>
                            <img src="./assets/carrusel1.jpg" alt="Slide 1" />
                        </div>
                        <div>
                            <img src="./assets/carrusel2.jpg" alt="Slide 2" />
                        </div>
                        <div>
                            <img src="./assets/carrusel3.jpg" alt="Slide 3" />
                        </div>
                        <div>
                            <img src="./assets/carrusel4.jpg" alt="Slide 4" />
                        </div>
                        <div>
                            <img src="./assets/carrusel5.jpg" alt="Slide 5" />
                        </div>
                    </Carousel>
                </div>
            </div>

            )}

        </main>
    );
};

export default Wines;
