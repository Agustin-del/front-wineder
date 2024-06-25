import React, { useState, useEffect } from 'react';
import Anchor from './Anchor.jsx';

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        console.log('toggleMenu called');
    };

    useEffect(() => {
        if (isOpen) {
            console.log('open menu');
        } else {
            console.log('close menu');
        }
    }, [isOpen]);


    return (
        <section className="bg-[#73383E] h-[100px] flex flex-row justify-between items-center px-5">

            <img src="./assets/logo-2.png" className="w-[100px]" alt="logo-home" />
            <button
                className="md:hidden lg:hidden text-white focus:outline-none"
                onClick={toggleMenu} >
                <img src="./assets/menu.png" className="w-10" alt="menu" />
            </button>
            


            <nav className={`flex flex-row gap-3 md:flex md:flex-row md:justify-center md:gap-4 lg:gap-2
                 flex-grow ${isOpen ? 'block' : 'hidden'}`}>

                <Anchor href="/" text="Home" />
                <Anchor href="/wines" text="Wines" />
                <Anchor href="/contact" text="Contact" />
                <Anchor href="/login" text="Login" />


                {/* <Anchor href="#" text="Events" /> */}
                {/* <Anchor href="#" text="About" /> */}

            </nav>
        </section>
    );
};

export default Header;
