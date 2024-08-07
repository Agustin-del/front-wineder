import React from 'react'

import axios from 'axios';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { API_BASE_URL } from '../utils/config'

const Client = () => {
  const [client, setClient] = useState([])
  const [buyOrders, setBuyOrders] = useState([])
  const [newOrders, setNewOrders] = useState([])
  const [orderProducts, setOrderProducts] = useState([])
  const token = useSelector(store => store.authReducer.token)
  const role = useSelector(store => store.roleReducer.role)
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5;
  const sortedOrders = buyOrders.sort((a, b) => new Date(b.orderDate) - new Date(a.orderDate));

  // Calculate the orders to display on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentOrders = sortedOrders.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate the total number of pages
  const totalPages = Math.ceil(sortedOrders.length / itemsPerPage);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const calculateTotal = (items) => {
    return items.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  const getData = async () => {
    try {
      const response = await axios.get(
        // 'https://wineder-app.onrender.com/api/auth/current',
        `${API_BASE_URL}/api/auth/current`,
        { headers: { 'Authorization': `Bearer ${token}` } });
      setClient(response.data)
    }
    catch (error) {
      console.error(error)
    }
    setLoading(false)
  }
  const getNewOrders = async () => {
    try {
      const response = await axios.get(
        // 'https://wineder-app.onrender.com/api/buyorder/client/pending', 
        `${API_BASE_URL}/api/buyorder/client/pending`,
        {
          headers: { 'Authorization': `Bearer ${token}` }
        });
      setNewOrders(response.data);
      console.log(newOrders)

    } catch (error) {
      console.log(error)
      // console.log('Error fetching products:', error.response.data);
    }

  };

  const getBuyOrders = async () => {
    try {
      const response = await axios.get(
        // 'https://wineder-app.onrender.com/api/buyorder/client/all', 
        `${API_BASE_URL}/api/buyorder/client/all`,
        {
          headers: { 'Authorization': `Bearer ${token}` }
        });
      setBuyOrders(response.data);

      setOrderProducts(response.data[0].orderProducts)

    } catch (error) {
      console.log(error)
      // console.log('Error fetching products:', error.response.data);
    }
    setLoading(false);
  };

  useEffect(() => {
    getData();
    getBuyOrders();
    getNewOrders();
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

          <h2 className='text-3xl text-center lg:text-5xl my-8 lg:mt-10'><strong>Welcome {client.name} {client.lastName}!</strong></h2>
          <div className='flex  flex-col  my-5 lg:flex-row lg:justify-around '>
            <div className=' flex justify-center'>
              <div className='flex flex-col justify-center items-center gap-5 ml-5 px-5 py-8 rounded-lg w-[80%] md:w-[400px]  lg:h-[300px] border-2 border-gray-300 shadow-lg'>
                <h3 className='text-2xl lg:text-3xl italic'>Personal information </h3>
                <h4><strong>Email:</strong> {client.email}</h4>
                <div className='flex gap-5 justify-center items-center flex-col md:flex-row'>

                  <h4><strong>First Name:</strong> {client.name} </h4>
                  <h4 className='md:ml-5'><strong>Last Name:</strong> {client.lastName}</h4>
                </div>
              </div>
            </div>


            <div className='flex flex-col '>

              <section className='flex flex-wrap justify-center gap-5 my-5 relative z-10'>


                <div className=''>
                  <h3 className='text-2xl ml-5 py-6 md:text-center md:ml-0 lg:text-3xl italic'>Recent Purchases</h3>
                  <table className='rounded-lg border-2 border-gray-300 table-auto shadow-lg md:w-[400px] lg:w-[500px] xl:w-[800px]'>

                    <thead className='bg-[#E5D1D2] rounded-tl-lg rounded-tr-lg'>
                      <tr>
                        <th className='px-4 py-2 border-b-2 border-gray-300 text-center font-semibold text-black'>Order Number</th>
                        <th className='px-4 py-2 border-b-2 border-gray-300 text-center font-semibold text-black'>Total Amount</th>
                        <th className='px-4 py-2 border-b-2 border-gray-300 text-center font-semibold text-black'>Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentOrders.map((buyOrder) => (
                        <tr key={buyOrder.id} className="hover:bg-gray-100">
                          <td className="px-4 py-2 border-b text-center text-gray-800">{buyOrder.orderNumber}</td>
                          <td className="px-4 py-2 border-b text-center text-gray-800">{formatter.format(calculateTotal(buyOrder.orderProducts))}</td>
                          <td className="px-4 py-2 border-b text-center text-gray-800">{buyOrder.orderDate}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="pagination">
                    {Array.from({ length: totalPages }, (_, index) => (
                      <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={`px-2 py-1 mx-1 ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                      >
                        {index + 1}
                      </button>
                    ))}
                  </div>
                </div>

              </section>
              {/* <section className="py-10">
              <div className='flex flex-col gap-2'>
                <h3 className='text-2xl  pt-5 lg:text-3xl italic'>Your choises</h3>
                {orderProducts.map(item => (
                  <div key={item.id} className="flex flex-row  bg-green-200 shadow-lg rounded-lg lg:w-[1/3]">
                    <div className="h-[80%] bg-cover bg-center">
                      <img src={item.image != null ? (item.image) : ('/assets/vinoGenerico.png')} alt={item.productName} className="w-[1/3] h-full object-cover opacity-0" />
                    </div>
                    <div className="p-4">
                      <p className="text-lg font-semibold text-gray-900">{item.productName}</p>
                    </div>
                  </div>

                ))}
              </div>
            </section> */}

            </div>

          </div>

          <img className=' w-[90%] flex items-center mx-auto mb-5 lg:w-[70%]  shadow-[0_3px_10px_rgb(0,0,0,0.2)] ' src="./assets/imgClient.jpg" alt="" />

        </>
      )}
    </div>
  )
}

export default Client