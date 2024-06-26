import React, { useState, useEffect } from 'react';
import Anchor from './Anchor.jsx';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        console.log('toggleMenu called');
    };



    return (
        <section>
            <header className="bg-[#73383E] h-[100px] flex flex-row justify-between items-center px-5 relative z-50">
                {/* IMAGEN LOGO */}
                <img src="/assets/logo-2.png" className="w-[100px]" alt="logo-home" />


                <button className=' bg-[#5e2a30] px-4 py-2 rounded-lg text-white hover:bg-[#bd7079] shadow-[0_3px_10px_rgb(0,0,0,0.2)]' > <Anchor href="/login" text="Login" /></button>
                <button className=' bg-[#5e2a30] px-4 py-2 rounded-lg text-white hover:bg-[#bd7079] shadow-[0_3px_10px_rgb(0,0,0,0.2)]'><Anchor href="/registerClient" text="Register" /></button>

                {/* CARRITO */}
                <NavLink to="/carrito">
                    <img src="./assets/cart.png" alt="" className="w-8 h-8" />
                </NavLink>

                <div>
                    {/* Botón de menú hamburguesa para vistas móviles */}
                    <button className="md:hidden lg:hidden text-white focus:outline-none" onClick={toggleMenu}>
                        <img src="./assets/menu.png" className="w-10" alt="menu" />
                    </button>

                    {/* Menú de navegación */}
                    <nav className={`absolute top-[84px] left-0 right-0 bg-[#73383E] md:justify-center  transition-max-height duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen' : 'max-h-0'} z-50 md:max-h-full lg:max-h-full md:flex md:items-center lg:flex lg:items-center`}>
                        <div className="flex flex-col md:flex-row lg:flex-row items-center md: text-xl md:gap-5  text-white my-5">
                            <Anchor href="/" text="Home" />
                            <Anchor href="/wines" text="Wines" />
                            <Anchor href="/contact" text="Contact" />
                            <Anchor href="/admin" text="Admin" />
                            <Anchor href="/client" text="Client" />
                        </div>
                    </nav>
                </div>

            </header>
        </section>
    );
};

export default Header;
