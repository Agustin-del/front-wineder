import React from 'react'

const CardHomeWine = (props) => {
    return (
        
        <div className={`${props.bgColor} w-[300px] h-[100px] rounded-lg flex items-center justify-around hover:transform hover:scale-105 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]`}>
            <h3 className="text-3xl text-white text-left">{props.name}</h3>
            <img src={props.image} className="w-[34px]" alt="red wine"  />
        </div>

    )
}

export default CardHomeWine