
import React, { useEffect } from 'react'

//Componente que tiene la img del vino y el boton de agregar al carrito
const CardWineDetails = ({ rating }) => {
    return (
        <div className='flex flex-row items-center justify-around py-5 border-2 lg:w-[60%] rounded-lg w-full bg-[#E5D1D2] md:justify-center md:w-[80%]'>
            <section className='w-[20%] '   >
                <img src="/assets/vino-tinto.png" alt="Slide 1" />
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
                    <button className='bg-[#5e2a30] px-4 py-2 rounded-lg text-white'>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default CardWineDetails