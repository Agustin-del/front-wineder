import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Admin = () => {
    const [client , setClient] = useState()
    const [order , setOrder] = useState()
    const[product , setProduct] = useState()
  //  const isAuthenticated = useSelector(store => store.authReducer.isAuthenticated)

    useEffect(() => {
        getData()
    }, [])


    const getData = async () => {

        const client = await axios.get('http://localhost:8080/api/clients/all', {
            headers: {
                'Authorization': `Bearer ${client.data}`
            }
        })

        setClient(client.data)
        console.log(client.data);
      
        // const order = await axios.get('http://localhost:8080/api/')
        // setOrder(order.data)
       
        const product = await axios.get("http://localhost:8080/api/products/all")
      
        setProduct(product.data)
        console.log(product.data);
    }
    return (
        <div>
            <h2 className='text-3xl text-center py-5'>Admin</h2>

            <div className="md:flex flex items-center flex-col md:flex-row" >
                <ul className="flex-column w-[60%]  space-y space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
                    <li>
                        <a href="#" className="inline-flex items-center px-4 py-3 text-white bg-[#5e2a30] rounded-lg active w-full dark:bg-blue-600" aria-current="page">
                            <svg className="w-4 h-4 me-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                            </svg>
                            Clients
                        </a>
                    </li>
                    <li>
                        <a href="#" className="inline-flex items-center px-4 py-3 text-white bg-[#5e2a30] rounded-lg active w-full dark:bg-blue-600">
                            <svg className="w-4 h-4 me-2 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18"><path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" /></svg>
                            Orders
                        </a>
                    </li>
                    <li>
                        <a href="#" className="inline-flex items-center px-4 py-3 text-white bg-[#5e2a30] rounded-lg active w-full dark:bg-blue-600">
                            <svg className="w-4 h-4 me-2 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18"><path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" /></svg>
                            Products
                        </a>
                    </li>

                </ul>
                <div className="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Profile Tab</h3>
                    <p className="mb-2">This is some placeholder content the Profile tab's associated content, clicking another tab will toggle the visibility of this one for the next.</p>
                    <p>The tab JavaScript swaps classes to control the content visibility and styling.</p>
                </div>
            </div>

        </div>
    )
}

export default Admin