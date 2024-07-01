import React from 'react'
import TextWineDetails from '../components/TextWineDetails'
import CartsWines from '../components/CartsWines'
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const Client = () => {
  const [client, setClient] = useState([])
  const [buyOrders, setBuyOrders] = useState([])
  const [buyOrdersProducts, setBuyOrdersProducts] = useState([])
  const token = useSelector(store => store.authReducer.token)
  const role = useSelector(store => store.roleReducer.role)
  const [loading, setLoading] = useState(true);


  const getData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/auth/current',
        { headers: { 'Authorization': `Bearer ${token}` } });

      setClient(response.data)
      console.log(response.data);
    }
    catch (error) {
      console.log(error)
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

      const buyOrdersProducts = await axios.get('http://localhost:8080/api/buyorder/client/pending', {
        headers: { 'Authorization': `Bearer ${token}` }

      })
      setBuyOrdersProducts(buyOrdersProducts.data)
      console.log(buyOrdersProducts.data);

    } catch (error) {
      console.error('Error fetching products:', error.response.data);
    }
    setLoading(false);
  };

  useEffect(() => {
    getData();
    getBuyOrders();
  }, [token]);

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
<<<<<<< HEAD


          <section>
            <h3>Your next desire</h3>
            <div className='bg-blue-200 w-full flex flex-row '>
              <img src="/assets/vinoGenerico.png" alt="" />
              <div className='bg-white'><p>Travel to the vineyard and taste the wine</p></div>
            </div>
          </section>



          <div>

            <h3 className='text-2xl text-center pt-5 lg:text-3xl italic'>Recent Purchases</h3>
            <section className='flex flex-wrap justify-center gap-5 my-5 relative z-10'>
              <table className='table-auto border-2 border-black w-[80%] md:w-[60%] shadow-lg'>
                <thead className='bg-gray-200'>
                  <tr>
                    <th className='px-4 py-2 border-b-2 border-gray-300 text-center font-semibold text-black'>Order Number</th>
                    <th className='px-4 py-2 border-b-2 border-gray-300 text-center font-semibold text-black'>Total Amount</th>
                    <th className='px-4 py-2 border-b-2 border-gray-300 text-center font-semibold text-black'>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {buyOrders.map((buyOrder) => (
                    <tr key={buyOrder.id} className='hover:bg-gray-100'>
                      <td className='px-4 py-2 border-b text-center text-gray-800'>{buyOrder.orderNumber}</td>
                      <td className='px-4 py-2 border-b text-center text-gray-800'>{formatter.format(buyOrder.totalAmount)}</td>
                      <td className='px-4 py-2 border-b text-center text-gray-800'>{buyOrder.orderDate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

            </section>

=======
          
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
                  {buyOrders.map((buyOrder) => (
                    <tr key={buyOrder.id} className='hover:bg-gray-100'>
                      <td className='px-4 py-2 border-b text-center text-gray-800'>{buyOrder.orderNumber}</td>
                      <td className='px-4 py-2 border-b text-center text-gray-800'>{formatter.format(buyOrder.totalAmount)}</td>
                      <td className='px-4 py-2 border-b text-center text-gray-800'>{buyOrder.orderDate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

            </section>

            <div className='flex flex-col gap-2 ml-5'>
              <h3 className='text-2xl  pt-5 lg:text-3xl italic'>Wish list</h3>
              <p>....</p>
            </div>



>>>>>>> 567d1c42de47c488c05b35a6397c44c92ed53753
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