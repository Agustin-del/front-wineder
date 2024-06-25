import React from 'react'

import { Link } from 'react-router-dom';

const CartsWines = (props) => {
    return (
        <div className={`relative group cursor-pointer overflow-hidden duration-500 w-64 h-80 ${props.bgColor} text-gray-50 p-5`}>
            <div className="">
                <div className="group-hover:scale-110 w-full h-60  duration-500" >
                    <img src={props.image} alt="img-home" className='w-full h-full object-cover' />
                </div>
                <div className="absolute w-56 left-0 p-5 my-4 -bottom-14 duration-500 group-hover:-translate-y-12">
                    <div className="absolute -z-10 left-0 w-64 h-36 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-[#1b1213]"></div>
                    <span className="text-xl font-bold">{props.name}</span>
                    <h3>{props.winery}</h3>
                    <p className='mb-3'>{props.price}</p>
                    <Link to="/wineDetails" className="group-hover:opacity-100 p-2 w-56 duration-500 opacity-0 bg-gradient-to-r from-[#743339] to-[#6d484c] border border-[#967b6a] rounded-lg">
                       Details...
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CartsWines