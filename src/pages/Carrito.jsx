import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const Carrito = () => {

    const token = useSelector((store) => store.authReducer.token);

    const [loading, setLoading] = useState(true);
    const [cartItems, setCartItems] = useState([]);
    const [wishlist, setWishlist] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        fetchData();

        setLoading(false);
    }, []);

  //   useEffect(() => {
  //     //fetchWishlist();
  //     console.log(wishlist);
  //     console.log(cartItems);
  //   }, [cartItems]);

//   const checkOutClick = (event) => {
//     event.preventDefault();
//     modifyBuyOrder();
//   };


  const fetchData = async () => {

    try {
      const response = await axios.get(
        "http://localhost:8080/api/buyorder/client/pending",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const aux = response.data.orderProducts;
      console.log(aux);
      setCartItems(aux);
    } catch (error) {
      console.error("Error fetching products:", error.response.data);
    }
  };

  //   const fetchWishlist = async () => {
  //     try {
  //       const responseW = await axios.get(
  //         "http://localhost:8080/api/orderproducts/client/wishlist",
  //         {
  //           headers: { Authorization: `Bearer ${token}` },
  //         }
  //       );

  //       const aux = responseW.data;
  //       setWishlist(aux);
  //     } catch (error) {
  //       console.log("There is no wishlist", error);
  //     }
  //   };

  const handleQuantityChange = async (id, delta) => {
    try {
      setCartItems(
        cartItems.map((item) => {
          if (item.id === id) {
            const newQuantity = Math.max(
              1,
              Math.min(item.quantity + delta, item.stock)
            );
            return { ...item, quantity: newQuantity };
          } else {
            return item;
          }
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

    const setOrderProductFalse = async (id) => {
        try {
            await axios.put(
                `http://localhost:8080/api/orderproducts/update/${id}`,
                null,
                {
                    headers: { 'Authorization': `Bearer ${token}` },
                }
            );

            const aux = [...cartItems];
            const updateCart = aux.filter((item) => item.id !== id);
            setCartItems(updateCart);

      console.log(cartItems);
    } catch (error) {
      console.log(error);
    }
  };
  const clearBasket = async () => {

    console.log(cartItems)

    for (const item of [...cartItems]) {
      // clone the array to avoid concurrent modification errors
      try {
        await axios.delete(
          `http://localhost:8080/api/orderproducts/delete/${item.id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
      } catch (error) {
        console.log(error);
      }
    }
    setCartItems([]);
    console.log(cartItems);
  };

    const deleteOrderProduct = async (id) => {
        try {
            const response = await axios.delete(
                `http://localhost:8080/api/orderproducts/delete/${id}`,
                {
                    headers: { 'Authorization': `Bearer ${token}` },
                }
            );
            console.log(response.data);
            if (cartItems.length === 1) {
                setCartItems([]);

            }
            const updateCart = cartItems.filter((item) => item.id !== id);
            setCartItems(updateCart);

            console.log(cartItems);
        } catch (error) {
            console.log(error);
        }
    };

    /**
     * Handle click on the "Add to Cart" button
     * Removes the item from the wishlist and updates the cartItems state
     */
    // const handleClickCart = async (id) => {
    //     try {
    //         // Get the item from the wishlist and update its quantity in the orderProducts collection
    //         const itemToAdd = wishlist.find((item) => item.id === id);

    //         const response = await axios.put(
    //             `http://localhost:8080/api/orderproducts/updatetrue/${id}`,
    //             {
    //                 quantity: itemToAdd.quantity,
    //             },
    //             {
    //                 headers: { 'Authorization': `Bearer ${token}` },

    //             }
    //         );

    //         // Remove the item from the wishlist
    //         const updatedWishlist = wishlist.filter((item) => item.id !== id);
    //         setWishlist(updatedWishlist);

      // Add the item to the cart



      const updatedCartItems = [...cartItems, itemToAdd];
      setCartItems(updatedCartItems);
      console.log(cartItems);

  
  



  const checkOutClick = async () => {
    //ARMAR EL JSON PARA MANDAR:DESARMAR CARD ITEMS

    try {
      const aux = [...cartItems];

      const response = await axios.post(
        "http://localhost:8080/api/buyorder/modify",
        aux,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (response && response.status === 200) {
        navigate("/payment");
        console.log(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };



    return (
        <div>
            {loading ? (
                <div className="flex items-center justify-center w-full h-screen bg-[#232323]">
                    <img className="w-[300px]" src="/assets/copa.gif" alt="" />
                </div>
            ) : (
                <div className="bg-gray-100">
                    <div className="container mx-auto px-4 py-8">
                        <h1 className="text-4xl font-semibold text-gray-800 mb-6">
                            Shopping Cart
                        </h1>

                        <div className="bg-white shadow-md rounded-lg overflow-hidden md:w-[90%] md:ml-10 lg:w-[70%] lg:ml-[20%]">
                            {cartItems.length === 0 ? (
                                <p className="text-gray-800 font-semibold text-xl text-center w-full py-5">
                                    {" "}
                                    Nothing choose yet !!
                                </p>
                            ) : (
                                cartItems.map((item) => (
                                    <div
                                        key={item.id}
                                        className="flex items-center justify-between border-b border-gray-200 py-4"
                                    >
                                        <div className="flex items-center space-x-8">
                                            <img
                                                src={item.image ? item.image : "/assets/vino-tinto.png"}
                                                alt={item.productName}
                                                className="h-16 w-16 object-cover rounded"
                                            />
                                            <div>
                                                <p className="text-gray-800 font-semibold">
                                                    {item.productName}
                                                </p>
                                                {/* <p className="text-gray-600">{item.description}</p> */}
                                            </div>
                                        </div>
                                        <div className="flex flex-col md:flex-row  ">
                                            <div className="flex items-center mr-5">
                                                <button
                                                    onClick={() => handleQuantityChange(item.id, -1)}
                                                    className="bg-gray-200 px-2  text-lg shadow-md rounded-[5%]"
                                                >
                                                    -
                                                </button>
                                                <p className="text-gray-800 font-semibold mx-2">
                                                    {item.quantity}
                                                </p>
                                                <button
                                                    onClick={() => handleQuantityChange(item.id, 1)}
                                                    className="bg-gray-200 px-2  text-lg shadow-md rounded-[5%]"
                                                >
                                                    +
                                                </button>
                                            </div>
                                            {/* <div>
                                                <p className="text-gray-800 font-semibold">{item.stock}</p>
                                            </div> */}
                                        </div>
                                        <div className="flex items-center flex-col mt-7">
                                            <p className="text-gray-800 font-semibold">
                                                $
                                                {(item.quantity * item.price)
                                                    .toString()
                                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                            </p>
                                            <button
                                                className="w-20 hover:text-green-500"
                                                onClick={() => setOrderProductFalse(item.id)}
                                            >
                                                <strong>Buy later</strong>
                                            </button>
                                        </div>
                                        <button
                                            onClick={() => deleteOrderProduct(item.id)}
                                            className="p-2"
                                        >
                                            <img
                                                className="w-8"
                                                src="/assets/deleteRed.png"
                                                alt="cart icon"
                                            />
                                        </button>
                                    </div>
                                ))
                            )}
                            <div className="flex justify-end items-center bg-gray-100 px-6 py-4">
                                <div className="text-gray-800 font-semibold mr-4">
                                    Subtotal:
                                </div>
                                <div className="text-xl text-gray-800">
                                    $
                                    {cartItems
                                        .reduce((acc, item) => acc + item.price * item.quantity, 0)
                                        .toFixed(2)
                                        .toString()
                                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end mt-6 gap-4">
                            <button
                                className="bg-white border-2 border-[#73383E] hover:bg-[#ee9da2] hover:texte-white text-[#73383E] px-4 py-2 rounded-lg"
                                onAbort={clearBasket}
                            >
                                Clear basket
                            </button>
                            <button
                                className="bg-[#236533] hover:bg-[#e4858b] text-white px-4 py-2 rounded-lg"
                                onClick={checkOutClick}
                            >
                                Checkout
                            </button>
                        </div>
                    </div>
                    <div className="bg-violet-300  p-5 w-full flex flex-col">
                        <h3 className="text-xl font-semibold text-gray-800 mb-6">
                            Your Wishlist
                        </h3>
                        {wishlist.length === 0 ? (
                            <div> Nothing in your wishlist yet !! </div>
                        ) : (
                            <div className="flex flex-col gap-3 items-center">
                                {wishlist.map((product) => (
                                    <div
                                        key={product.id}
                                        className="border-2 p-2 rounded-lg flex flex-row gap-3 items-center"
                                    >
                                        <img
                                            src={product.image || "/assets/vino-tinto.png"}
                                            alt={product.productName}
                                            className="h-16 w-16 object-cover rounded"
                                        />
                                        <div>{product.productName}</div>
                                        <div>{product.quantity} </div>
                                        <div>{product.stock} in stock</div>
                                        <div>
                                            $
                                            {product.price
                                                .toFixed(2)
                                                .toString()
                                                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                        </div>
                                        <button
                                            onClick={() => handleClickCart(product.id)}
                                            className="p-2 bg-black rounded-lg"
                                        >
                                            <img
                                                className="w-8"
                                                src="/assets/cartGreen.png"
                                                alt="cart icon"
                                            />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Carrito
