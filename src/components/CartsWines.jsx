import { Modal } from 'flowbite-react';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { CiCircleCheck } from "react-icons/ci";
import axios from 'axios';

<<<<<<< HEAD


const CartsWines = ({ bgColor, ...props }) => {
    const [isGreen, setIsGreen] = useState(false);

    const [openModal, setOpenModal] = useState(false)
    const token = useSelector(store => store.authReducer.token)
=======
const CartsWines = ({ bgColor, ...props }) => {
    const [isGreen, setIsGreen] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const [isAddedToCart, setIsAddedToCart] = useState(false);
    const token = useSelector(store => store.authReducer.token);
>>>>>>> 69d233ef7278e56efa88d0e4a726f2fe6b13a903

    switch (bgColor) {
        case 'WHITE':
            bgColor = "bg-[#D4B891]";
            break;
        case 'RED':
            bgColor = "bg-[#5e2a30]";
            break;
        case 'PINK':
            bgColor = "bg-[#DCC8C9]";
            break;
        case 'SPARKLING':
            bgColor = "bg-[#A39D92]";
            break;
        default:
            bgColor = "";
    }
    
    const role = useSelector(store => store.roleReducer.role);

    const handleCart = () => {
        setIsGreen(true);
    }
<<<<<<< HEAD
    const handleClickCart = async () => {
        handleCart()
=======

    const handleClickCart = async () => {
        setIsButtonDisabled(true);
        handleCart();
>>>>>>> 69d233ef7278e56efa88d0e4a726f2fe6b13a903

        try {
            const response = await axios.post(`http://localhost:8080/api/orderproducts/create/${props.id}`, null, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
<<<<<<< HEAD
            })
            if (response.status === 200) {
                setOpenModal(true)
=======
            });
            if (response.status === 200) {
                setOpenModal(true);
                setIsAddedToCart(true);
>>>>>>> 69d233ef7278e56efa88d0e4a726f2fe6b13a903
                setTimeout(() => {
                    setOpenModal(false);
                    setIsGreen(false);
                    // setIsButtonDisabled(false); // Uncomment this line if you want to re-enable the button after some time
                }, 1000);
            }
        } catch (e) {
<<<<<<< HEAD
            console.error(e)
        }

=======
            console.error(e);
            setIsButtonDisabled(false);
        }
>>>>>>> 69d233ef7278e56efa88d0e4a726f2fe6b13a903
    }

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    return (
        <>
<<<<<<< HEAD

            {openModal &&

=======
            {openModal &&
>>>>>>> 69d233ef7278e56efa88d0e4a726f2fe6b13a903
                <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
                    <div className="text-center flex flex-col p-2 justify-center">
                        <CiCircleCheck className="mx-auto mb-4 h-12 w-12 text-green-400 dark:text-gray-200" />
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            The product has been added to the cart
                        </h3>
                    </div>
                </Modal>
            }
<<<<<<< HEAD
            <div className={` relative group cursor-pointer overflow-hidden duration-500 w-64 h-64 ${bgColor} text-gray-50 p-5`}>
                <div>
                    <div className="group-hover:scale-110 w-full h-60  duration-500" >
                        <img src={props.image} alt="wine bottle" className='w-full h-full object-cover' />
                    </div>
                    <div className="absolute w-56 left-0 p-5 my-4 -bottom-20 duration-500 group-hover:-translate-y-12">
                        <div className="absolute -z-10 left-0 w-64 h-48 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-[#1b1213]"></div>
                        <span className="text-xl font-bold">{props.name}</span>
                        <h3>{props.winery}</h3>
                        <p className='mb-3'>{formatter.format(props.price)}</p>
                        <div className='flex justify-between items-center'>
                            <Link to={`/wineDetails/${props.id}`} className="group-hover:opacity-100 p-2 duration-500 opacity-0 bg-gradient-to-r from-[#743339] to-[#6d484c] border border-[#967b6a] rounded-lg">
                                Details
                            </Link>
                            {role == "client" && <button onClick={handleClickCart} className="p-2">
                                <img className="w-8" src={`${isGreen ? '/assets/cartGreen.png' : '/assets/cart.png'}`} alt="cart icon" />
                            </button>}
                        </div>
=======

            <div className={`w-60 h-[350px] bg-white p-3 flex flex-col gap-1 border-gray-400 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] border-2 rounded-lg group hover:scale-105 duration-500 ${bgColor}`}>
                <div className={`duration-500 contrast-30 h-48 ${bgColor} hover:contrast-100 flex items-center justify-center`}>
                    <img className='w-full h-full object-cover' src={props.image ? props.image : '/assets/vinoGenerico.png'} alt="wine bottle" />
                </div>
                <div className={`flex flex-col gap-4 h-full`}>
                    <div className={`flex flex-col justify-between `}>
                        <span className={`font-bold text-xl text-[#73383E]`}>{formatter.format(props.price)}</span>
                        <div className={`flex flex-col`}>
                            <span className={`text-sm font-bold`}>{props.name}</span>
                        </div>
                    </div>
                    <div className="flex justify-between text-center" >
                        <Link to={`/wineDetails/${props.id}`} className="w-20 p-2 duration-500 text-white bg-gradient-to-r from-[#743339] to-[#6d484c] border border-[#967b6a] rounded-lg">
                            Details
                        </Link>
                        {role === "client" && (
                            isAddedToCart ? (
                                <span className="p-2 text-green-600">Added to cart</span>
                            ) : (
                                <button onClick={handleClickCart} className="text-white  p-2 bg-gradient-to-r from-[#743339] to-[#6d484c] border border-[#967b6a] rounded-lg" disabled={isButtonDisabled}>
                                    Add to cart
                                </button>
                            )
                        )}
>>>>>>> 69d233ef7278e56efa88d0e4a726f2fe6b13a903
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartsWines;
<<<<<<< HEAD

=======
>>>>>>> 69d233ef7278e56efa88d0e4a726f2fe6b13a903
