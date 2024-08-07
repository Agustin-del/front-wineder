import React, { useState, useEffect } from 'react';
import Anchor from './Anchor.jsx';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/actions/authActions.js';
import { eraseRole } from '../redux/actions/roleActions.js';
import { Button, Modal } from 'flowbite-react';
import { HiOutlineExclamationCircle } from "react-icons/hi";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const isAuthenticated = useSelector(store => store.authReducer.isAuthenticated);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation(); // Use location to detect route changes
    const role = useSelector(store => store.roleReducer.role);
    const [openModal, setOpenModal] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const confirmLogout = () => {
        setOpenModal(true);
    };

    const closeModal = () => {
        setOpenModal(false);
    };

    const handleLogout = () => {
        
        dispatch(eraseRole());
        dispatch(logout());
        
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        
        setOpenModal(false);
        navigate("/");
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        // Close menu on route change
        closeMenu();
    }, [location.pathname]); // Run the effect when the pathname changes

    return (
        <>
            <section>
                <header id="top" className="bg-[#73383E] h-[100px] md:h-[150px] flex flex-row justify-between items-center px-5 relative z-50">
                    {/* IMAGEN LOGO */}
                    <a href="/">
                        <img src="/assets/logo-2.png" className="w-[100px] md:w-[150px] lg:w-[200px]" alt="logo-home" />
                    </a>

                    {/* Menú de navegación */}
                    <div className={`absolute md:static lg:static top-[84px] md:items-center lg:mr-10 left-0 right-0 bg-[#73383E] md:bg-transparent lg:bg-transparent transition-max-height duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen' : 'max-h-0'} z-50 md:max-h-full lg:max-h-full md:flex md:items-center lg:flex`}>
                        <div className="flex flex-col gap-1 md:flex-row lg:flex-row items-center md:text-xl md:gap-5 text-white my-5 md:my-0 lg:my-0 lg:p-2 lg:flex lg:items-center">
                            <Anchor href="/" text="Home" onClick={closeMenu} />
                            <Anchor href="/wines" text="Wines" onClick={closeMenu} />
                            <Anchor href="/contact" text="Contact" onClick={closeMenu} />
                            {role === "admin" ? <Anchor href="/admin" text="Admin" onClick={closeMenu} /> : role === "client" && <Anchor href="/client" text="Client" onClick={closeMenu} />}
                        </div>
                        <div className='flex flex-col md:flex-row lg:flex-row'>
                            {!isAuthenticated ? <>
                                <button className='lg:text-xl flex items-center justify-center px-4 rounded-lg text-white'>
                                    <Anchor href="/login" text="Login" onClick={closeMenu} />
                                </button>
                                <button className='lg:text-xl px-4 flex items-center justify-center pb-4 md:pb-0 text-white'>
                                    <Anchor href="/registerClient" text="Register" onClick={closeMenu} />
                                </button>
                            </> :
                                <>
                                    <div className="flex items-center flex-col md:flex-row lg:flex-row">
                                        <button onClick={confirmLogout} className='lg:text-xl md:text-xl px-4 py-2 rounded-lg text-white'>
                                            <Anchor href="/" text="Logout" onClick={closeMenu} />
                                        </button>
                                        {role === "client" && <NavLink to="/carrito" onClick={closeMenu}>
                                            <img src="/assets/cart.png" alt="cart" className="w-8 lg:h-8 h-11 pb-2 lg:pb-0" />
                                        </NavLink>}
                                    </div>
                                </>}
                        </div>
                    </div>

                    {/* Botón de menú hamburguesa para vistas móviles */}
                    <button className="md:hidden lg:hidden text-white focus:outline-none" onClick={toggleMenu}>
                        <img src="./assets/menu.png" className="w-10" alt="menu" />
                    </button>
                </header>
            </section>
            {openModal &&
                <Modal show={confirmLogout} size="md" onClose={closeModal} popup>
                    <Modal.Header />
                    <Modal.Body>
                        <div className="text-center">
                            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                                Are you sure you want to logout?
                            </h3>
                            <div className="flex justify-center gap-4">
                                <Button color="failure" onClick={handleLogout}>
                                    {"Yes, I'm sure"}
                                </Button>
                                <Button color="gray" onClick={closeModal}>
                                    No, cancel
                                </Button>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            }
        </>
    );
};

export default Header;
