import React, { useState } from 'react';
import Anchor from './Anchor.jsx';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/actions/authActions.js';
import { eraseRole } from '../redux/actions/roleActions.js';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const isAuthenticated = useSelector(store => store.authReducer.isAuthenticated)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const role = useSelector(store => store.roleReducer.role)
    const toggleMenu = () => {
        setIsOpen(!isOpen);
        console.log('toggleMenu called');
    };

    const handleLogout = () => {                                       
        dispatch(eraseRole())
        dispatch(logout())
        navigate("/")    
    }

    return (
        <section>
    <header className="bg-[#73383E] h-[100px] md:h-[150px] flex flex-row justify-between  items-center px-5 relative z-50">
        {/* IMAGEN LOGO */}
        <img src="/assets/logo-2.png" className="w-[100px] md:w-[150px] " alt="logo-home" />

<<<<<<< HEAD
                {!isAuthenticated ? <>
                    <div className="flex gap-4">
                        <button className='flex justify-center bg-[#5e2a30] px-4 py-2 rounded-lg text-white hover:bg-[#bd7079] w-[75px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]' > <Anchor href="/login" text="Login" /></button>
                        <button className='flex justify-center bg-[#5e2a30] px-4 py-2 rounded-lg text-white hover:bg-[#bd7079] w-[75px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]'><Anchor href="/registerClient" text="Register" /></button>
                    </div>
                    </> : 
                    <>
                        <button onClick={handleLogout} className=' bg-[#5e2a30] px-4 py-2 rounded-lg text-white hover:bg-[#bd7079] shadow-[0_3px_10px_rgb(0,0,0,0.2)]'><Anchor href="/" text="Logout" /></button>
                        <NavLink to="/carrito">
                            <img src="./assets/cart.png" alt="" className="w-8 h-8" />
                        </NavLink>
                    </>
                }
                
                {/* CARRITO */}
                
                
=======
        {!isAuthenticated ? <>
            <button className=' bg-[#5e2a30] px-4 py-2  rounded-lg text-white hover:bg-[#bd7079] shadow-[0_3px_10px_rgb(0,0,0,0.2)]' > 
                <Anchor href="/login" text="Login" />
            </button>
            <button className=' bg-[#5e2a30] px-4 py-2 rounded-lg text-white hover:bg-[#bd7079] shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
                <Anchor href="/registerClient" text="Register" />
            </button>
        </> : 
        <>
            <button onClick={handleLogout} className=' bg-[#5e2a30] px-4 py-2 rounded-lg text-white hover:bg-[#bd7079] shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
                <Anchor href="/" text="Logout" />
            </button>
            <NavLink to="/carrito">
                <img src="./assets/cart.png" alt="cart" className="w-8 h-8" />
            </NavLink>
        </>
        }
>>>>>>> fad91a28a7d76275a82dbdc9cc8b8cc049f628ba

        {/* Menú de navegación */}
        <nav className={`absolute md:static lg:static top-[84px] lg:mr-10 left-0 right-0 bg-[#73383E] md:bg-transparent lg:bg-transparent transition-max-height duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen' : 'max-h-0'} z-50 md:max-h-full lg:max-h-full md:flex md:items-center lg:flex lg:items-center`}>
            <div className="flex flex-col md:flex-row lg:flex-row items-center md:text-xl md:gap-5 text-white my-5 md:my-0 lg:my-0">
                <Anchor href="/" text="Home" />
                <Anchor href="/wines" text="Wines" />
                <Anchor href="/contact" text="Contact" />
                {role === "admin" ? <Anchor href="/admin" text="Admin" /> : role==="client" && <Anchor href="/client" text="Client" />}
            </div>
        </nav>

        {/* Botón de menú hamburguesa para vistas móviles */}
        <button className="md:hidden lg:hidden text-white focus:outline-none" onClick={toggleMenu}>
            <img src="./assets/menu.png" className="w-10" alt="menu" />
        </button>
    </header>
</section>
    );
};

export default Header;
