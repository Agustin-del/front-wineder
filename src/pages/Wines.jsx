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
            const response = await axios.get("http://localhost:8080/api/products/all")
            setWines(response.data)
            const uniqueVarietals = [...new Set(response.data.map(wine => wine.wineDescription?.varietal).filter(Boolean))]
            const uniqueRegions = [... new Set(response.data.map(wine => wine.wineDescription?.region).filter( Boolean))]
            const  uniqueWineTypes = [... new Set(response.data.map(wine => wine.wineDescription?.wineType).filter(Boolean))]
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
        }, 2000);

    }, []);

    const filteredWines = wines.filter(wine => {
        return (
            (selectedVarietal === '' || wine.wineDescription?.varietal=== selectedVarietal)&&
            (selectedRegion === '' || wine.wineDescription?.region === selectedRegion)&&
            (selectedWineType === '' || wine.wineDescription?.wineType === selectedWineType)&&
            (selectedProvider === '' || wine.provider === selectedProvider)&&
            (searchText === "" || wine.name.toLowerCase().includes(searchText.toLocaleLowerCase()))
        )
    })
    return (
        <main>
            {loading ? (
                <div className='flex items-center justify-center w-full h-screen bg-[#232323]'>
                    <img className='w-[300px]' src="./assets/copa.gif" alt="" />
                </div>) : (
                <div className='flex flex-wrap justify-center gap-5 my-5 relative z-10 lg:mx-5'>
                    <div className="w-[60%] flex flex-col md:flex-row md:flex-wrap justify-center gap-2 mb-5">
                        <div className="flex justify-center ">
                            <input
                                type="text"
                                placeholder="Meet your wine"
                                className="border border-gray-300 rounded p-2 w-[80%] mb-2 md:mb-0 md:mr-2"
                                value={searchText}
                                onChange={(e) => setSearchText(e.target.value)}
                            />
                        </div>
                        <div className="md:flex"> 
                            <select value={selectedVarietal} onChange={(e) => setSelectedVarietal(e.target.value)} name="varietal" className="focus:border-none focus:ring-0 border-none mb-2 md:mb-0 md:mr-2">
                                <option value="">All Varietals</option>
                                {varietals.map((varietal, index) => (
                                    <option key={index} value={varietal}>{varietal}</option>
                                ))} 
                            </select>
                            <select value={selectedRegion} onChange={(e) => setSelectedRegion(e.target.value)} name="region"  className="focus:border-none focus:ring-0 border-none mb-2 md:mb-0 md:mr-2">
                                <option value="">All Regions</option>
                                {regions.map((region, index) => (
                                <option key={index} value={region}>{region}</option>
                                ))}
                            </select>
                            <select value = {selectedWineType} onChange={(e) => setSelectedWineType(e.target.value)} ame="wineType" className="focus:border-none focus:ring-0 border-none mb-2 md:mb-0 md:mr-2">
                                <option value="">All Wine Types</option>
                                {wineTypes.map((wineType, index) => (
                                <option key={index} value={wineType}>{wineType}</option>
                                ))}
                            </select>
                            <select value ={selectedProvider} onChange={(e) => setSelectedProvider(e.target.value)}name="provider " className='focus:border-none focus:ring-0 border-none' >
                                <option value="">All Providers</option>
                                {providers.map((provider, index) => (
                                <option key={index} value={provider}>{provider}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    {/* COMPONETE DE LAS CARD DE WINE, ESTA EN COMPONENTS-CartsWines.jsx  */}

                    {filteredWines.map(wine => {
                        if (wine.wineDescription !== null) {
                            return <div className=" w-full flex justify-center  md:flex-row md:w-[45%] lg:w-1/4">
                                <CartsWines key={wine.id} id={wine.id} name={wine.name} price={wine.price} winery={wine.provider} image='./assets/vino-tinto.png' bgColor={wine.wineDescription.wineType}></CartsWines>
                            </div> 
                        }
                    })}
                    {/* <CartsWines name= 'Red Wines' winery='winery name' price='price' image='./assets/vino-tinto.png' bgColor='bg-[#5e2a30]'/>
           <CartsWines name= 'White Wines' winery='winery name' price='price' image='./assets/vino-blanco.png' bgColor='bg-[#D4B891]'/>
           <CartsWines name= 'Red Wines' winery='winery name' price='price' image='./assets/vino-rosado.png' bgColor='bg-[#DCC8C9]'/>
           <CartsWines name= 'Red Wines' winery='winery name' price='price' image='./assets/vino-espumante.png' bgColor='bg-[#D0C9BD]'/> */}


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
