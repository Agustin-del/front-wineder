import React from 'react'

import axios from 'axios';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { list } from 'postcss';

const Client = () => {
  const [client, setClient] = useState([])
  const [buyOrders, setBuyOrders] = useState([])
  const token = useSelector(store => store.authReducer.token)
  const role = useSelector(store => store.roleReducer.role)
  const [loading, setLoading] = useState(true);
  
  const calculateTotal = (items) => {
    return items.reduce((total, item) => total + item.quantity * item.price, 0);
  };
  
  const getData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/auth/current',
        { headers: { 'Authorization': `Bearer ${token}` } });
        setClient(response.data)
    }
    catch (error) {
      console.error(error)
    }
    setLoading(false)
  }

  const getBuyOrders = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/buyorder/client/all', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      setBuyOrders(response.data);
      console.log(response.data);
      
    } catch (error) {
      console.log(error)
      // console.log('Error fetching products:', error.response.data);
    }
    setLoading(false);
  };

  useEffect(() => {
    getData();
    getBuyOrders();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);

  }, []);
  
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });
  
  
  return (

    <div>
      {loading ? (
        <div className='flex items-center justify-center w-full h-screen bg-[#232323]'>
          <img className='w-[300px]' src="./assets/copa.gif" alt="" />
        </div>) : (<>

          <h2 className='text-3xl text-center lg:text-5xl mt-5 lg:mt-10'><strong>Welcome {client.name} {client.lastName}!</strong></h2>

          <div className='flex flex-col gap-2 ml-5'>
            <h3 className='text-2xl  pt-5 lg:text-3xl italic'>Personal information </h3>
            <h4><strong>Email:</strong> {client.email}</h4>
            <div className='flex gap-2 flex-row'>

              <h4><strong>First Name:</strong> {client.name} </h4>
              <h4 className='ml-5'><strong>Last Name:</strong> {client.lastName}</h4>
            </div>
          </div>

          <div>
            <h3 className='text-2xl ml-5 pt-5 lg:text-3xl italic'>Recent Purchases</h3>
            <section className='flex flex-wrap justify-center gap-5 my-5 relative z-10'>
              <table className='table-auto border-2 border-black w-[80%] md:w-[60%] shadow-lg'>
                <thead className='bg-[#E5D1D2]'>
                  <tr>
                    <th className='px-4 py-2 border-b-2 border-gray-300 text-center font-semibold text-black'>Order Number</th>
                    <th className='px-4 py-2 border-b-2 border-gray-300 text-center font-semibold text-black'>Total Amount</th>
                    <th className='px-4 py-2 border-b-2 border-gray-300 text-center font-semibold text-black'>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {buyOrders.map((buyOrder) => {
                    return <tr key={buyOrder.id} className='hover:bg-gray-100'>
                      <td className='px-4 py-2 border-b text-center text-gray-800'>{buyOrder.orderNumber}</td>
                      <td className='px-4 py-2 border-b text-center text-gray-800'>{formatter.format((calculateTotal(buyOrder.orderProducts)))}</td>
                      <td className='px-4 py-2 border-b text-center text-gray-800'>{buyOrder.orderDate}</td>
                    </tr>
                  })}
                </tbody>
              </table>

            </section>
            
          </div>

          <img className=' w-[90%] flex items-center mx-auto mb-5 lg:w-[70%]  shadow-[0_3px_10px_rgb(0,0,0,0.2)] ' src="./assets/imgClient.jpg" alt="" />

        </>
      )}
    </div>
  )
}

export default Client