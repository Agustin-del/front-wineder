import React from 'react'


// Componente que contiene los detalles descriptivo del vino
const TextWineDetails = (props) => {
    return (
        <section className='w-[80%] '>
            <h3 className="text-xl mb-3 ">{props.title}</h3>
            <p className="mb-3">{props.text}</p>
        </section>
    )
}

export default TextWineDetails