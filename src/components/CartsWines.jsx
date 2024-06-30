import { Modal } from 'flowbite-react';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CiCircleCheck } from "react-icons/ci";
import axios from 'axios';


const CartsWines = ({ bgColor, ...props }) => {
    const [isGreen, setIsGreen] = useState(false);
    const [openModal, setOpenModal] = useState (false)
    const token = useSelector(store => store.authReducer.token)
    
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
        default:
            bgColor = "";
    }
    const role = useSelector(store => store.roleReducer.role)

    const handleCart = () => {
        setIsGreen(true);
    }
    const handleClickCart = async () => {  
        handleCart()
        
        try {
            const response = await axios.post(`http://localhost:8080/api/orderproducts/create/${props.id}`, null, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            if(response.status === 200) {
                setOpenModal(true)
                setTimeout(() => {
                    setOpenModal(false)
                    setIsGreen(false)
                }, 1000)
            }
        } catch (e) {
            console.error(e)
        } 
    }

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });
    
    return (
        <>
        {openModal &&
    
        <Modal show={openModal} size="md" onClose ={() => setOpenModal(false)} popup>
            <div className="text-center flex flex-col p-2 justify-center">
                <CiCircleCheck className="mx-auto mb-4 h-12 w-12 text-green-400 dark:text-gray-200" />
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                    The product has been added to the cart
                </h3>
            </div>
        </Modal>
        }
        <div className={` relative group cursor-pointer overflow-hidden duration-500 w-64 h-64 ${bgColor} text-gray-50 p-5` }>
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
                </div>
            </div>
        </div>
        </>
    );
}

export default CartsWines;
