import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import TablaProductAdmin from '../components/TablaProductAdmin'

const Admin = () => {
    const [client, setClient] = useState([])
    // const [order, setOrder] = useState([])
    const [product, setProduct] = useState([])
    const [activeTab, setActiveTab] = useState('clients')
    const token = useSelector(store => store.authReducer.token)

    useEffect(() => {
        getData()
    }, [activeTab])

    const getData = async () => {
        const headers = {
            'Authorization': `Bearer ${token}`
        }

        if (activeTab === 'clients') {
            const clients = await axios.get('http://localhost:8080/api/clients/all', { headers })
            setClient(clients.data)
        // } else if (activeTab === 'orders') {
        //     const orders = await axios.get('http://localhost:8080/api/orders/all', { headers })
        //     setOrder(orders.data)
        // } 
        } else if (activeTab === 'products') {
            const products = await axios.get('http://localhost:8080/api/products/all', { headers })
            setProduct(products.data)
        }
    }

    const handleTabClick = (tab) => {
        setActiveTab(tab)
    }

    return (
        <div>
            <h2 className='text-3xl text-center py-5'>Admin</h2>
            <div className="md:flex flex items-center flex-col md:flex-row">
                <ul className="flex-column w-[60%] space-y space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
                    <li>
                        <a href="#" className={`inline-flex items-center px-4 py-3 text-white bg-[#5e2a30] rounded-lg active w-full ${activeTab === 'clients' ? 'bg-[#382c2e] text-white' : ''}`} onClick={() => handleTabClick('clients')}>
                            <svg className="w-4 h-4 me-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                            </svg>
                            Clients
                        </a>
                    </li>
                    {/* <li>
                        <a href="#" className={`inline-flex items-center px-4 py-3 text-white bg-[#5e2a30] rounded-lg active w-full ${activeTab === 'orders' ? 'bg-blue-600 text-white' : ''}`} onClick={() => handleTabClick('orders')}>
                            <svg className="w-4 h-4 me-2 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                            </svg>
                            Orders
                        </a>
                    </li> */}
                    <li>
                        <a href="#" className={`inline-flex items-center px-4 py-3 text-white bg-[#5e2a30] rounded-lg active w-full ${activeTab === 'products' ? 'bg-[#382c2e]  text-white' : ''}`} onClick={() => handleTabClick('products')}>
                            <svg className="w-4 h-4 me-2 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                            </svg>
                            Products
                        </a>
                    </li>
                </ul>
                <div className="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        {activeTab === 'clients' && <TablaProductAdmin  name="Client"/>}
                        {/* {activeTab === 'orders' && <TablaOrderAdmin />} */}
                        {activeTab === 'products' && <TablaProductAdmin name="Product"/>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admin
