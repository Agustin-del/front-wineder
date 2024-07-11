import React, { useEffect, useState } from 'react'
import CartsWines from '../components/CartsWines';
import axios from 'axios';
import { Carousel } from "flowbite-react";



const Wines = () => {

    const [wines, setWines] = useState([]);
    const [loading, setLoading] = useState(true);
    const [varietals, setVarietals] = useState([])
    const [regions, setRegions] = useState([])
    const [wineTypes, setWineTypes] = useState([])
    const [providers, setProviders] = useState([])
    const [searchText, setSearchText] = useState('')
    const [selectedVarietal, setSelectedVarietal] = useState('')
    const [selectedRegion, setSelectedRegion] = useState('')
    const [selectedWineType, setSelectedWineType] = useState('')
    const [selectedProvider, setSelectedProvider] = useState('')

    const getWines = async () => {
        try {
            const response = await axios.get("https://wineder-app.onrender.com/api/products/all")
            setWines(response.data)
            const uniqueVarietals = [...new Set(response.data.map(wine => wine.wineDescription?.varietal).filter(Boolean))]
            const uniqueRegions = [... new Set(response.data.map(wine => wine.wineDescription?.region).filter(Boolean))]
            const uniqueWineTypes = [... new Set(response.data.map(wine => wine.wineDescription?.wineType).filter(Boolean))]
            const uniqueProviders = [...new Set(response.data.map(wine => wine.provider))]
            setVarietals(uniqueVarietals)
            setRegions(uniqueRegions)
            setWineTypes(uniqueWineTypes)
            setProviders(uniqueProviders)
        } catch (error) {
            console.error(error)
        }
        setLoading(false)
    }

    useEffect(() => {
        getWines()
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 6000);

    }, []);

    const filteredWines = wines.filter(wine => {
        return (
            (selectedVarietal === '' || wine.wineDescription?.varietal === selectedVarietal) &&
            (selectedRegion === '' || wine.wineDescription?.region === selectedRegion) &&
            (selectedWineType === '' || wine.wineDescription?.wineType === selectedWineType) &&
            (selectedProvider === '' || wine.provider === selectedProvider) &&
            (searchText === "" || wine.name.toLowerCase().includes(searchText.toLocaleLowerCase()))
        )
    })
    return (
        <main>
            {loading ? (
                <div className='flex items-center justify-center w-full h-screen bg-[#232323]'>
                    <img className='w-[300px]' src="./assets/copa.gif" alt="" />
                </div>) : (
                <div className='flex flex-wrap justify-center gap-5 my-5 relative z-10 lg:flex-col md:flex-col'>
                    <div className="w-[60%] flex flex-col md:flex-row md:flex-wrap justify-center gap-2 mb-5 lg:flex-row  md:w-[100%] ">
                        <div className="flex justify-center lg:flex-col md:flex-col ">
                            <input
                                type="text"
                                placeholder="Meet your wine"
                                className="border border-gray-300 rounded p-2 w-[80%] mb-2 md:mb-0 md:mr-2"
                                value={searchText}
                                onChange={(e) => setSearchText(e.target.value)}
                            />
                        </div>
                        <div className="flex md:flex justify-center flex-col lg:flex-row">
                            <select value={selectedVarietal} onChange={(e) => setSelectedVarietal(e.target.value)} name="varietal" className="focus:border-none focus:ring-0 border-none mb-2 md:mb-0 md:mr-2">
                                <option value="">All Varietals</option>
                                {varietals.map((varietal, index) => (

                                    <option key={index} value={varietal}>{varietal.replace(/_/g, " ")}</option>

                                ))}
                            </select>
                            <select value={selectedRegion} onChange={(e) => setSelectedRegion(e.target.value)} name="region" className="focus:border-none focus:ring-0 border-none mb-2 md:mb-0 md:mr-2">
                                <option value="">All Regions</option>
                                {regions.map((region, index) => (

                                    <option key={index} value={region}>{region.replace(/_/g, " ")}</option>

                                ))}
                            </select>
                            <select value={selectedWineType} onChange={(e) => setSelectedWineType(e.target.value)} ame="wineType" className="focus:border-none focus:ring-0 border-none mb-2 md:mb-0 md:mr-2">
                                <option value="">All Wine Types</option>
                                {wineTypes.map((wineType, index) => (

                                    <option key={index} value={wineType}>{wineType.replace(/_/g, " ")}</option>

                                ))}
                            </select>
                            <select value={selectedProvider} onChange={(e) => setSelectedProvider(e.target.value)} name="provider " className='focus:border-none focus:ring-0 border-none' >
                                <option value="">All Providers</option>
                                {providers.map((provider, index) => (

                                    <option key={index} value={provider}>{provider.replace(/_/g, " ")}</option>

                                ))}
                            </select>
                        </div>
                    </div>
                    {/* COMPONETE DE LAS CARD DE WINE, ESTA EN COMPONENTS-CartsWines.jsx  */}
                    <div className='flex flex-col md:flex-row md:flex-wrap md:gap-5 md:mx-6 lg:mx-0 lg:gap-0' >

                        {filteredWines.map(wine => {
                            if (wine.wineDescription !== null) {

                                return <div className=" w-full flex justify-center mb-2 md:flex-row md:w-[30%]  ">
                                    <CartsWines key={wine.id} id={wine.id} name={wine.name} price={wine.price} winery={wine.provider} image={wine.image} bgColor={wine.wineDescription.wineType}></CartsWines>

                                </div>
                            }
                        })}
                    </div>

                    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 w-[80%] mx-auto ">

                        <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay>
                            <div>
                                <img src="/assets/carrusel1.jpg" alt="Slide 1" />
                            </div>
                            <div>
                                <img src="/assets/carrusel2.jpg" alt="Slide 2" />
                            </div>
                            <div>
                                <img src="/assets/carrusel3.jpg" alt="Slide 3" />
                            </div>
                            <div>
                                <img src="/assets/carrusel4.jpg" alt="Slide 4" />
                            </div>
                            <div>
                                <img src="/assets/carrusel5.jpg" alt="Slide 5" />
                            </div>
                        </Carousel>
                    </div>
                </div>

            )}
        </main>
    );
};

export default Wines;
