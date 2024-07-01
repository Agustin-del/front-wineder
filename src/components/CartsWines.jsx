import { Modal } from 'flowbite-react';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { CiCircleCheck } from "react-icons/ci";
import axios from 'axios';

const CartsWines = ({ bgColor, ...props }) => {
    const [isGreen, setIsGreen] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const [isAddedToCart, setIsAddedToCart] = useState(false);
    const token = useSelector(store => store.authReducer.token);

    switch (bgColor) {
        case 'WHITE':
            bgColor = "bg-[#D4B891]";
            break;
        case 'RED':
            bgColor = "bg-[#8f585d]";
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

    const handleClickCart = async () => {
        setIsButtonDisabled(true);
        handleCart();

        try {
            const response = await axios.post(`https://wineder-app.onrender.com/api/orderproducts/create/${props.id}`, null, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (response.status === 200) {
                setOpenModal(true);
                setIsAddedToCart(true);
                setTimeout(() => {
                    setOpenModal(false);
                    setIsGreen(false);
                    // setIsButtonDisabled(false); // Uncomment this line if you want to re-enable the button after some time
                }, 1000);
            }
        } catch (e) {
            console.error(e);
            setIsButtonDisabled(false);
        }
    }

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    return (
        <>
            {openModal &&
                <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
                    <div className="text-center flex flex-col p-2 justify-center">
                        <CiCircleCheck className="mx-auto mb-4 h-12 w-12 text-green-400 dark:text-gray-200" />
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            The product has been added to the cart
                        </h3>
                    </div>
                </Modal>
            }

            <div className={`w-60 h-[350px] bg-white p-3 flex flex-col gap-1 border-gray-400 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] border-2 rounded-lg group hover:scale-105 duration-500 `}>
                <div className={`duration-500 contrast-30 h-48 ${bgColor} hover:contrast-100 flex items-center justify-center`}>
                    <img className='w-full h-full object-cover' src={props.image ? props.image : '/assets/vinoGenerico.png'} alt="wine bottle" />
                </div>
                <div className={`flex flex-col gap-4 h-full`}>
                    <div className={`flex flex-col justify-between `}>
                        <span className={`font-bold text-xl text-[#73383E]`}>{formatter.format(props.price)}</span>
                        <div className={`flex flex-col`}>
                            <span className={`text-sm font-bold`}>{props.name}</span>
                            <p>{props.provider }</p>
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
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartsWines;
