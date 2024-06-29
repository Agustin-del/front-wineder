import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

const Carrito = () => {
    const token = useSelector(store => store.authReducer.token);
    const [loading, setLoading] = useState(true);
    const [cartItems, setCartItems] = useState([]);
    const [whislist, setWhislist] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/orderproducts/client/all', {
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                setCartItems(response.data);
            } catch (error) {
                console.error('Error fetching products:', error.response.data);
            }
            setLoading(false);
        };


        fetchData();

    }, []);

    useEffect(() => {
        const fetchWishlist = async () => {
            try {
                const responseW = await axios.get('http://localhost:8080/api/orderproducts/client/wishlist', {
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                setWhislist(responseW.data);
            } catch (error) {
                console.log("there is no wishlist", error)
            }
        }
        fetchWishlist();
    }, [cartItems])




    const handleQuantityChange = (id, delta) => {
        setCartItems(cartItems.map(item => {
            if (item.id === id) {
                const newQuantity = Math.max(1, Math.min(item.quantity + delta, item.stock));
                return { ...item, quantity: newQuantity };
            } else {
                return item;
            }
        }));
    };

    const setOrderProductFalse = async (id) => {
        try {
            await axios.put(`http://localhost:8080/api/orderproducts/update/${id}`, null, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            setCartItems(cartItems.filter(item => item.id !== id));
        } catch (error) {
            console.log(error);
        }
    };
    const clearBasket = async () => {
        for (const item of cartItems) {
            try {
                await axios.delete(`http://localhost:8080/api/orderproducts/delete/${item.id}`, {
                    headers: { 'Authorization': `Bearer ${token}` }
                });
            } catch (error) {
                console.log(error);
            }
        }
        setCartItems([]);
    };

    const deleteOrderProduct = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:8080/api/orderproducts/delete/${id}`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            console.log(response.data);
            if (cartItems.length === 1) {
                setCartItems([]);
            }
            setCartItems(cartItems.filter(item => item.id !== id));
        } catch (error) {
            console.log(error);
        }
    };

    // const checkOutClick = async () => {
    //     try{
    //         const updatesQuantity = cartItems.map(item => {
    //             return {
    //                 id: item.id,
    //                 quantity: item.quantity
    //             }
    //         })
    //             }catc
    //     }
    // }

    return (
        <div>
            {loading ? (
                <div className='flex items-center justify-center w-full h-screen bg-[#232323]'>
                    <img className='w-[300px]' src="./assets/copa.gif" alt="" />
                </div>
            ) : (
                <div className="bg-gray-100">
                    <div className="container mx-auto px-4 py-8">
                        <h1 className="text-4xl font-semibold text-gray-800 mb-6">Shopping Cart</h1>

                        <div className="bg-white shadow-md rounded-lg overflow-hidden md:w-[90%] md:ml-10 lg:w-[70%] lg:ml-[20%]">
                            {cartItems.length === 0 ? (
                                <p className='text-gray-800 font-semibold text-xl text-center w-full py-5'> Nothing choose yet :D !!</p>
                            ) : (
                                cartItems.map((item) => (
                                    <div key={item.id} className="flex items-center justify-between border-b border-gray-200 py-4">
                                        <div className="flex items-center space-x-8">
                                            <img src={item.image ? item.image : "./assets/vino-tinto.png"} alt={item.productName} className="h-16 w-16 object-cover rounded" />
                                            <div>
                                                <p className="text-gray-800 font-semibold">{item.productName}</p>
                                                <p className="text-gray-600">{item.description}</p>
                                            </div>
                                        </div>
                                        <div className='flex flex-col md:flex-row '>
                                            <div className="flex items-center mr-5">
                                                <button onClick={() => handleQuantityChange(item.id, -1)} className="bg-gray-200 px-2  text-lg shadow-md rounded-[5%]">-</button>
                                                <p className="text-gray-800 font-semibold mx-2">{item.quantity}</p>
                                                <button onClick={() => handleQuantityChange(item.id, 1)} className="bg-gray-200 px-2  text-lg shadow-md rounded-[5%]">+</button>
                                            </div>
                                            <div>
                                                <p className="text-gray-800 font-semibold">{item.stock}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center flex-col mt-7">
                                            <p className="text-gray-800 font-semibold">${item.price}</p>
                                            <button className='w-20 hover:text-green-500' onClick={() => setOrderProductFalse(item.id)}><strong>Buy later</strong></button>
                                        </div>
                                        <button onClick={() => deleteOrderProduct(item.id)} className="p-2">
                                            <img className="w-8" src='./assets/deleteRed.png' alt="cart icon" />
                                        </button>
                                    </div>
                                ))
                            )}
                            <div className="flex justify-end items-center bg-gray-100 px-6 py-4">
                                <div className="text-gray-800 font-semibold mr-4">Subtotal:</div>
                                <div className="text-xl text-gray-800">${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</div>
                            </div>
                        </div>

                        <div className="flex justify-end mt-6 gap-4">
                            <button className="bg-white border-2 border-[#73383E] hover:bg-[#ee9da2] hover:texte-white text-[#73383E] px-4 py-2 rounded-lg" onAbort={clearBasket}>Clear basket</button>
                            <button className="bg-[#236533] hover:bg-[#e4858b] text-white px-4 py-2 rounded-lg">Checkout</button>
                        </div>
                    </div>
                    <div className="bg-violet-300  p-5 w-full flex flex-col" >
                        <h3 className="text-xl font-semibold text-gray-800 mb-6">Your Whishlist</h3>
                        {whislist.length === 0 ? (<div> Nothing in your whislist yet :D </div>) : (<div className='flex flex-col gap-3 items-center'>

                            {whislist.map((product) => (
                                <div key={product.id} className='border-2 p-2 rounded-lg flex flex-row gap-3 items-center'>
                                    <img src={product.image ? product.image : "./assets/vino-tinto.png"} alt={product.productName} className="h-16 w-16 object-cover rounded" />
                                    <div>{product.productName}</div>
                                    <div>{product.quantity} </div>
                                    <div>{product.stock}in stock</div>
                                    <div>{product.price}</div>
                                </div>
                            ))}

                        </div>
                        )}
                    </div>

                </div>

            )}
        </div>
    );
};

export default Carrito;

