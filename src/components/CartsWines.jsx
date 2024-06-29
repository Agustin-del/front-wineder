import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const CartsWines = ({ bgColor, ...props }) => {
    const [isGreen, setIsGreen] = useState(false);

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

    const handleClickCart = () => {
        setIsGreen(!isGreen);
    }

    return (

        <div className={` relative group cursor-pointer overflow-hidden duration-500 w-64 h-64 ${bgColor} text-gray-50 p-5` }>
            <div>
                <div className="group-hover:scale-110 w-full h-60  duration-500" >
                    <img src={props.image} alt="wine bottle" className='w-full h-full object-cover' />
                </div>
                <div className="absolute w-56 left-0 p-5 my-4 -bottom-20 duration-500 group-hover:-translate-y-12">
                    <div className="absolute -z-10 left-0 w-64 h-40 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-[#1b1213]"></div>
                    <span className="text-xl font-bold">{props.name}</span>
                    <h3>{props.winery}</h3>
                    <p className='mb-3'>${props.price}</p>
                    <div className='flex justify-between items-center'>
                        <Link to={`/wineDetails/${props.id}`} className="group-hover:opacity-100 p-2 duration-500 opacity-0 bg-gradient-to-r from-[#743339] to-[#6d484c] border border-[#967b6a] rounded-lg">
                            Details
                        </Link>
                        {role == "client" && <button onClick={handleClickCart} className="p-2">
                            <img className="w-8" src={`${isGreen ? './assets/cartGreen.png' : './assets/cart.png'}`} alt="cart icon" />
                        </button>}

                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartsWines;
