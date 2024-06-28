import React, { useState, useEffect } from 'react';

const Carrito = () => {
    const [loading, setLoading] = useState(true);
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Vino Tinto', description: 'Description of the product.', price: 24.99, quantity: 0, isGreen: true, imgSrc: './assets/vino-tinto.png' },
        { id: 2, name: 'Vino Rosado', description: 'Description of the product.', price: 24.99, quantity: 0, isGreen: true, imgSrc: './assets/vino-rosado.png' }
    ]);

    const handleClickCart = (id) => {
        setCartItems(cartItems.map(item =>
            item.id === id ? { ...item, isGreen: !item.isGreen } : item
        ));
    }

    const handleQuantityChange = (id, delta) => {
        setCartItems(cartItems.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + delta } : item
        ));
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
                </div>
            ) : (
                <div className="bg-gray-100">
                    <div className="container mx-auto px-4 py-8">
                        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Shopping Cart</h1>

                        <div className="bg-white shadow-md rounded-lg overflow-hidden md:w-[90%] md:ml-10 lg:w-[70%] lg:ml-[20%]">
                            {cartItems.map(item => (
                                <div key={item.id} className="flex items-center justify-between border-b border-gray-200 py-4">
                                    <div className="flex items-center space-x-8">
                                        <img src={item.imgSrc} alt="Product" className="h-16 w-16 object-cover rounded" />
                                        <div>
                                            <p className="text-gray-800 font-semibold">{item.name}</p>
                                            <p className="text-gray-600">{item.description}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center mr-5">
                                        <button onClick={() => handleQuantityChange(item.id, -1)} className="">-</button>
                                        <p className="text-gray-800 font-semibold mx-2">{item.quantity}</p>
                                        <button onClick={() => handleQuantityChange(item.id, 1)} className="">+</button>
                                    </div>
                                    <div className="flex items-center flex-col mt-7">
                                        <p className="text-gray-800 font-semibold">${item.price}</p>
                                        <button className='w-20 hover:text-green-500'><strong>Buy later</strong></button>
                                    </div>
                                    <button onClick={() => handleClickCart(item.id)} className="p-2">
                                        <img className="w-8" src={item.isGreen ? './assets/deleteRed.png' : './assets/deleteGreen.png'} alt="cart icon" />
                                    </button>
                                </div>
                            ))}

                            <div className="flex justify-end items-center bg-gray-100 px-6 py-4">
                                <div className="text-gray-800 font-semibold mr-4">Subtotal:</div>
                                <div className="text-xl text-gray-800">${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</div>
                            </div>
                        </div>

                        <div className="flex justify-end mt-6 gap-4">
                            <button className="bg-white border-2 border-[#73383E] hover:bg-[#ee9da2] hover:texte-white text-[#73383E] px-4 py-2 rounded-lg">Clear basket</button>
                            <button className="bg-[#73383E] hover:bg-[#e4858b] text-white px-4 py-2 rounded-lg">Checkout</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Carrito;
