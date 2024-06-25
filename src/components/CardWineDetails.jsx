import React from 'react'

//Componente que tiene la img del vino y el boton de agregar al carrito
const CardWineDetails = () => {
    return (
        <div className='flex flex-row items-center border-2 rounded-lg w-full bg-[#E5D1D2]'>

            <img className='w-[200px]' src="./assets/vino-tinto.png" alt="" />
            <div className='flex flex-col gap-2'>

                <p>Description</p>

                <div className='flex flex-col p-4 rounded-lg justify-between bg-slate-100 w-[200px]'>
                    <p className='text-xl mb-3' >Price</p>
                    <button className='bg-[#5e2a30] px-4 py-2 rounded-lg text-white'>Add to Cart</button>
                </div>
            </div>

        </div>
    )
}

export default CardWineDetails