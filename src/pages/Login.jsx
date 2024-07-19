import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../redux/actions/authActions';
import { Alert } from 'flowbite-react';
import { getRole } from '../redux/actions/roleActions';
// import { GoogleLogin } from '@react-oauth/google';
import { API_BASE_URL } from '../utils/config'



const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const [user, setUser] = useState([])
    const [alert, setAlert] = useState(null)
    const dispatch = useDispatch()
    const navigate = useNavigate();

    // const token = useSelector(store => store.authReducer.token)
    const [loading, setLoading] = useState(true);

    // const responseMessage = (response) => {
    //     setUser(response)
    //     navigate('/')
    // }
    // useEffect(() => {
    //     const userDetails = async() => {
    //         try {
    //             const response = await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.credential}`)
    //             console.log(response)
    //         } catch (e) {
    //             console.error(e)
    //         }
    //     }
    // }, [user])

    // const errorMessage = (error) => {
    //     setAlert({type:"failure", message:error})  
    // }

    const handleLogin = async (e) => {
        e.preventDefault();
        const requestBody = {
            email: username,
            password: password
        }
        try {
            
            const response = await axios.post(
                // 'https://wineder-app.onrender.com/api/auth/login',
                `${API_BASE_URL}/api/auth/login`,
                requestBody)

            dispatch(login(response.data))

            localStorage.setItem("token", response.data)

            const current = await axios.get(
                // 'https://wineder-app.onrender.com/api/auth/current',
                `${API_BASE_URL}/api/auth/current`,
                {
                    headers: {
                        'Authorization': `Bearer ${response.data}`
                    }
                })

            dispatch(getRole(current.data.role))
            localStorage.setItem("role", current.data.role)

            if (current.data.role === "admin") {
                navigate('/admin')
            }

            if (current.data.role === "client") {
                localStorage.setItem("token",response.data)
                localStorage.setItem("role",current.data.role)
                navigate('/client')
            }




        } catch (e) {
            setAlert({ type: "failure", message: e.response.data })
            setTimeout(() => {
                setAlert(null)
            }, 1500);
            setLoading(false);
        }

    };
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);

    }, []);

    return (

        <div>
            {loading ? (
                <div className='flex items-center justify-center w-full h-screen bg-[#232323]'>
                    <img className='w-[300px]' src="./assets/copa.gif" alt="" />
                </div>) : (


                <div className="flex items-center justify-center bg-red-100 relative ">
                    {/* <div className='relative w-[80%] md:w-[40%] lg:w-[30%]  my-5'>
                        <img className='rounded-xl shadow-md filter blur-[1px] lg:h-[500px] ' src="./assets/login.jpg" alt="" />
                    </div> */}
                    <div style={{ backgroundImage: `url('/assets/login.jpg')` }} className="shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] mx-2 bg-cover object-cover bg-center lg:h-[450px]  rounded-lg px-8 pt-6 pb-8 my-4 ">
                        <form className="bg-white bg-opacity-70 shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
                            <h2 className='text-6xl text-center mb-10 text-black'><strong>Login</strong></h2>
                            <div className="mb-4">
                                <label className="block text-black text-sm font-bold mb-2" htmlFor="username">
                                    <strong>Username</strong>
                                </label>
                                <input
                                    type="text"
                                    id="username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Username"
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-black text-sm font-bold mb-2" htmlFor="password">
                                    <strong>Password</strong>
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="******************"
                                />
                                {alert && <Alert color={alert.type}>{alert.message}</Alert>}
                            </div>
                            <div className="flex items-center justify-between">
                                <button onClick={handleLogin}
                                    type="submit"
                                    className="bg-[#5e2a30] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                >
                                    Login
                                </button>
                                {/* <GoogleLogin/> */}
                            </div>
                        </form>
                    </div>
                </div>

            )}
        </div>
    );
};

export default Login;
