import { CiCircleCheck } from "react-icons/ci";
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Modal } from "flowbite-react";

//Componente que tiene la img del vino y el boton de agregar al carrito
const CardWineDetails = ({ rating, id, image }) => {
    const [openModal, setOpenModal] = useState (false)
    const token = useSelector(store => store.authReducer.token)
    

    const addProductToCart = async () => {
        try {
            const response = await axios.post(`https://wineder-app.onrender.com/api/orderproducts/create/${id}`, null, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            if(response.status === 200) {
                setOpenModal(true)
                setTimeout(() => {
                    setOpenModal(false)
                }, 1000)
            }
        } catch (e) {
            console.error(e)
        }    
    }
    
    return (
        <div className='flex flex-row items-center justify-around py-5 border-2 lg:w-[60%] rounded-lg w-full bg-[#E5D1D2] md:justify-center md:w-[80%]'>
            <section className='w-[20%] '   >
                <img src={image ? image : "/assets/vinoGenerico.png"} alt="Slide 1" />
            </section>
            <div className='flex flex-col gap-2'>

                <div class="flex items-center gap-2 bg-[#5E2A30] p-2 rounded ">
                    {[...Array(5)].map((_, index) => (
                        <svg key={index} className={`w-4 h-4 ${index < rating ? 'text-yellow-300' : 'text-gray-300'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                    ))}
                </div>
                <div className='flex flex-col p-4 rounded-lg justify-between bg-slate-100 w-[200px]'>
                    <p className='text-xl mb-3' >$1.000</p>
                    <button onClick={addProductToCart} className='bg-[#5e2a30] px-4 py-2 rounded-lg text-white'>Add to Cart</button>
                </div>
            </div>
            {openModal &&

        <Modal show={openModal} size="md" onClose ={() => setOpenModal(false)}popup>
            <div className="text-center flex flex-col p-2 justify-center">
                <CiCircleCheck className="mx-auto mb-4 h-12 w-12 text-green-400 dark:text-gray-200" />
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                    The product has been added to the cart
                </h3>
            </div>
        </Modal>
        }
        </div>
    )
}

export default CardWineDetails