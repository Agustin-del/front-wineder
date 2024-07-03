import axios from 'axios';
import { Alert } from 'flowbite-react';
import React from 'react'
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import UploadImage from '../components/UploadImage';

const WineIncome = () => {
    const [loading, setLoading] = useState(true);
    const [isWine, setIsWine] = useState(true)
    const [providers, setProviders] = useState([])
    const [alert, setAlert] = useState({})
    const token = useSelector(store => store.authReducer.token)

    const [selectedFile, setSelectedFile] = useState(null);

    const [formData, setFormData] = useState({
        name: '',
        stock: '',
        price: '',
        description: '',
        isWine: true,
        variety: '',
        wineYear: '',
        wineType: '',
        region: '',
        companyName: ''

    })


    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const getProviders = async () => {
        const response = await axios.get(
            // 'https://wineder-app.onrender.com/api/provider/all',
            "http://localhost:8080/api/provider/all",
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
        let providerNames = []
        providerNames = response.data.map(provider => ([provider.companyName, ...providerNames]))
        setProviders(providerNames)
    }

    const handleIsWineChange = (e) => {
        const value = e.target.value === 'true'
        setIsWine(value)
        setFormData({
            ...formData,
            isWine: value
        })
    }

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };



    const handleSubmit = async (e) => {

        e.preventDefault()


        console.log(selectedFile)

        const formatData = new FormData()
        formatData.append('product', formData)
        formatData.append('file', selectedFile)


        try {
            const response = await axios.post(
                // 'https://wineder-app.onrender.com/api/products/create',
                "http://localhost:8080/api/products/create",
                formatData, {
                headers: {
                    Authorization: `bearer ${token}`
                }
            })
            setAlert({ type: "success", message: response.data })
            setTimeout(() => {
                setAlert({})
            }, 1000)
            console.log(response)
        } catch (e) {
            setAlert({ type: "failure", message: e.response.data })
        } finally {
            setFormData({
                name: '',
                stock: '',
                price: '',
                description: '',
                isWine: true,
                variety: '',
                wineYear: '',
                wineType: '',
                region: '',
                companyName: ''
            })
        }
    }

    useEffect(() => {
        getProviders()
    }, [providers])


    return (
        <body className="bg-gray-100">
            {loading ? (
                <div className='flex items-center justify-center w-full h-screen bg-[#232323]'>
                    <img className='w-[300px]' src="./assets/copa.gif" alt="" />
                </div>) : (
                <div className="container mx-auto px-4 py-8 lg:w-[80%] md:w-[60%] ">
                    <h1 className="text-3xl font-semibold text-gray-800 mb-6 ">Product Form</h1>

                    <form onSubmit={handleSubmit} class="bg-white shadow-md rounded-lg overflow-hidden ">
                        <div className="lg:flex lg:flex-wrap">
                            <div className="lg:w-[50%] flex items-center border-b border-gray-200 px-6 py-4">
                                <label for="name" class="text-gray-800 font-semibold w-32">Name:</label>
                                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter product name"
                                    className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                            </div>
                            <div className="lg:w-[50%] flex items-center border-b border-gray-200 px-6 py-4">
                                <label for="stock" class="text-gray-800 font-semibold w-32">Stock:</label>
                                <input type="text" id="stock" name="stock" value={formData.stock} onChange={handleChange} placeholder="Enter product stock"
                                    className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                            </div>
                            <div className="lg:w-[50%] flex items-center border-b border-gray-200 px-6 py-4">
                                <label for="price" class="text-gray-800 font-semibold w-32">Price:</label>
                                <input type="text" id="price" name="price" value={formData.price} onChange={handleChange} placeholder="Enter product price"
                                    className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                            </div>
                            <div className="lg:w-[50%] flex items-center border-b border-gray-200 px-6 py-4">
                                <label for="description" className="text-gray-800 font-semibold w-32">Description:</label>
                                <input type="text" id="description" name="description" value={formData.description} onChange={handleChange} placeholder="Enter product description"
                                    className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                            </div>
                            <div className="lg:w-[30%] flex items-center border-b border-gray-200 px-6 py-4">
                                <label htmlFor="isWine" className="text-gray-800 font-semibold w-32">Is Wine:</label>
                                <select id="isWine" name="isWine" value={isWine} onChange={handleIsWineChange}
                                    className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
                                    <option value="false">No</option>
                                    <option value="true">Yes</option>
                                </select>
                            </div>
                            {isWine && <>
                                <div className="lg:w-[35%] lg:gap-2 flex items-center border-b border-gray-200 px-6 py-4">
                                    <label for="variety" className="text-gray-800 font-semibold w-32">Wine Variety:</label>
                                    <select id="variety" name="variety" value={formData.variety} onChange={handleChange}
                                        className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
                                        <option value="">--select--</option>
                                        <option value="CABERNET_SAUVIGNON">CABERNET_SAUVIGNON</option>
                                        <option value="CABERNET_FRANC">CABERNET_FRANC</option>
                                        <option value="BONARDA">BONARDA</option>
                                        <option value="MALBEC">MALBEC</option>
                                        <option value="MERLOT">MERLOT</option>
                                        <option value="PINOT_NOIR">PINOT_NOIR</option>
                                        <option value="SYRAH">SYRAH</option>
                                        <option value="TEMPRANILLO">TEMPRANILLO</option>
                                        <option value="CHARDONNAY">CHARDONNAY</option>
                                        <option value="CHENIN">CHENIN</option>
                                        <option value="SAUVIGNON_BLANC">SAUVIGNON_BLANC</option>
                                        <option value="SEMILLON">SEMILLON</option>
                                        <option value="TORRONTES">TORRONTES</option>
                                        <option value="VIOGNER">VIOGNER</option>
                                        <option value="PROSECCO">PROSECCO</option>
                                        <option value="BRUT_NATURE">BRUT_NATURE</option>
                                        <option value="BRUT">BRUT</option>
                                        <option value="EXTRA_BRUT">EXTRA_BRUT</option>
                                    </select>
                                </div>
                                <div className="lg:w-[35%] lg:gap-2 flex items-center border-b border-gray-200 px-6 py-4">
                                    <label for="wineYear" class="text-gray-800 font-semibold w-32">Wine year:</label>
                                    <input id="wineYear" name="wineYear" value={formData.wineYear} onChange={handleChange} placeholder="Enter wine year"
                                        className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"></input>
                                </div>
                                <div className="lg:w-[30%] flex items-center border-b border-gray-200 px-6 py-4">
                                    <label for="wineType" class="text-gray-800 font-semibold w-32">Wine Type:</label>
                                    <select id="wineType" name="wineType" value={formData.wineType} onChange={handleChange}
                                        className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
                                        <option value="">--select--</option>
                                        <option value="RED">RED</option>
                                        <option value="WHITE">WHITE</option>
                                        <option value="SPARKLING">SPARKLING</option>
                                        <option value="PINK">PINK</option>
                                    </select>
                                </div>
                                <div className="lg:w-[30%] flex items-center border-b border-gray-200 px-6 py-4">
                                    <label for="region" class="text-gray-800 font-semibold w-32">Wine region:</label>
                                    <select id="region" name="region" value={formData.region} onChange={handleChange}
                                        className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
                                        <option value="">--select--</option>
                                        <option value="NORTH">NORTH</option>
                                        <option value="CUYO">CUYO</option>
                                        <option value="PATAGONIA">PATAGONIA</option>
                                        <option value="ATLANTIC">ATLANTIC</option>
                                    </select>
                                </div>
                                <div className="lg:w-[40%] lg:gap-2 flex items-center border-b border-gray-200 px-6 py-4">
                                    <label for="companyName" class="text-gray-800 font-semibold w-32">Company name:</label>
                                    <select id="companyName" name="companyName" value={formData.companyName} onChange={handleChange}
                                        className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
                                        <option value="">--select--</option>
                                        {providers && providers.map(provider => {
                                            return <option key={provider} value={provider}>{provider}</option>
                                        })}
                                    </select>
                                </div>

                            </>}
                            <div className="lg:flex lg:flex-wrap">

                                {/*  TRABAJO IMAGENES PARA UPLOAD */}


                                <input type="file" onChange={handleFileChange} />




                                {/* <UploadImage/> */}
                                <div className=" lg:w-[1000px] flex justify-end bg-gray-100 px-6 py-4">
                                    <button type="submit"
                                        className="bg-[#5e2a30] text-white px-4 py-2 rounded-lg focus:outline-none">Submit</button>
                                </div>
                            </div>
                        </div>
                    </form>
                    {alert && <Alert color={alert.type}>{alert.message}</Alert>}
                </div>
            )}
        </body>
    )
}


export default WineIncome