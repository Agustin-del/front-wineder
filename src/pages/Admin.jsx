import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import TablaProductAdmin from '../components/TablaProductAdmin'
import { Link } from 'react-router-dom'
import { Button } from 'flowbite-react'

const Admin = () => {
    const [data, setData] = useState([])
    const [activeTab, setActiveTab] = useState('clients')
    const token = useSelector(store => store.authReducer.token)
    const [loading, setLoading] = useState(true);
  

    useEffect(() => {
        getData()
    }, [activeTab])

    const getData = async () => {
        try {
            const headers = {
                'Authorization': `Bearer ${token}`
            }

            let response;

            if (activeTab === 'clients') {
                response = await axios.get('http://localhost:8080/api/clients/all', { headers })
            } else if (activeTab === 'orders') {
                response = await axios.get('http://localhost:8080/api/orderproducts/admin/all', { headers })
            } else if (activeTab === 'products') {
                response = await axios.get('http://localhost:8080/api/products/all', { headers })
            }
            else if (activeTab === 'provider') {
                response = await axios.get('http://localhost:8080/api/provider/all', { headers })

            }
            setData(response.data)
        }
        catch (error) {
            console.log(error);
        }
        setLoading(false);
    }



    const handleTabClick = (tab) => {
        setActiveTab(tab)
    }

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
                    <h2 className='text-3xl text-center py-5'><strong>Admin panel</strong></h2>
                    <div className="md:flex flex items-center text-center flex-col md:flex-row md:mx-5 md:my-2 lg:flex-col">
                        <ul className="flex-column w-[60%] space-y space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0 lg:w-[20%]">
                            <li>
                                <a href="#" className={`inline-flex items-center px-4 py-3 text-white bg-[#5e2a30] rounded-lg active w-full ${activeTab === 'clients' ? 'bg-[#0e0d0d] text-white' : ''}`} onClick={() => handleTabClick('clients')}>
                                    <img src="./assets/iconClients.png" alt="" className="w-6 h-6 me-2" />
                                    Clients
                                </a>
                            </li>
                            <li>
                                <a href="#" className={`inline-flex items-center px-4 py-3 text-white bg-[#5e2a30] rounded-lg active w-full ${activeTab === 'orders' ? 'bg-[#0e0d0d] text-white' : ''}`} onClick={() => handleTabClick('orders')}>
                                    <img src="./assets/iconOrders.png" alt="" className="w-6 h-6 me-2" />
                                    Orders
                                </a>
                            </li>
                            <li>
                                <a href="#" className={`inline-flex items-center px-4 py-3 text-white bg-[#5e2a30] rounded-lg active w-full ${activeTab === 'products' ? 'bg-[#0e0d0d]  text-white' : ''}`} onClick={() => handleTabClick('products')}>
                                    <img src="./assets/iconProducts.png" alt="" className="w-6 h-6 me-2" />
                                    Products
                                </a>
                            </li>
                            <li>

                                <Link to="/registerProvider">  <a className="inline-flex items-center px-4 py-3 text-white bg-[#5e2a30] rounded-lg active w-full"> <img src="./assets/iconAddProvider.png" alt="" className="w-6 h-6 me-2" />Register Provider</a></Link>
                            </li>
                        </ul>
                        <div className="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full lg:w-[70%] lg:mt-5">
                            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                                {activeTab === 'clients' && <TablaProductAdmin name="Client" col1="Last Name" col2="Adrress" data={data} />}
                                {activeTab === 'orders' && < TablaProductAdmin name="Order" col2="price" col3="Quantity" col4="Product name" data={data}  /> }
                                
                                {activeTab === 'products' && <TablaProductAdmin name="Product" col1="Name" col2="Price" col3="Stock" col4="Provider" data={data} />}


                                
                                {activeTab === 'products' && (
                                    <Link to="/wineIncome">
                                        <button className="w-[80%] md:w-[50%] lg:w-[40%] my-5 bg-[#5e2a30] hover:bg-[#3a1f22] text-white font-bold py-2 px-4 rounded">
                                            Create product
                                        </button>
                                    </Link>
                                )}

                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default Admin

