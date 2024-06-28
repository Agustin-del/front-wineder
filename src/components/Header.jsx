import React from 'react';
import { useState, useEffect } from 'react';
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

    const handleClick = () => {
        console.log('Button clicked');
    };

    return (
        <section className="bg-[#73383E] h-[100px] flex flex-row justify-between items-center px-5">

            <button onClick={() => console.log('Button clicked')} style={{ padding: '10px', backgroundColor: 'blue', color: 'white' }}>
                Click me
            </button>

            <div onClick={handleClick} style={{ padding: '10px', backgroundColor: 'blue', color: 'white' }}>
                Click me
            </div>



            <img src="./assets/logo-2.png" className="w-[100px]" alt="logo-home" />

            {/* Menu hamburger */}
            {/* <button
                className="md:hidden lg:hidden text-white focus:outline-none"
                onClick={toggleMenu}
            >
                <img src="./assets/menu.png" className="w-10" alt="menu" />
            </button> */}


            <nav className={`flex flex-col gap-3 md:flex md:flex-row md:justify-center md:gap-4 lg:gap-2
                 flex-grow ${isOpen ? 'block' : 'hidden'}`}>


                <Anchor href="/" text="Home" />
                <Anchor href="#" text="Wines" />
                <Anchor href="#" text="Events" />
                <Anchor href="/contact" text="Contact" />
                <Anchor href="#" text="About" />


            </nav>
        </section>
    );
};

export default Header;
