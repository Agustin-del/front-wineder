import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../redux/actions/authActions';
import { Alert } from 'flowbite-react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [alert, setAlert] = useState(null)
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const requestBody = {
            email:username,
            password: password
        }
        try {
            const response = await axios.post('http://localhost:8080/api/auth/login', requestBody)
            dispatch(login(response.data))
            const current = await axios.get('http://localhost:8080/api/auth/current', {
                headers: {
                    'Authorization': `Bearer ${response.data}`
                }
            })
            if (current.data.role === "admin") {
                navigate('/admin')
            }

            if (current.data.role === "client") {
                navigate('/')
            }
        } catch (e) {
            setAlert({type:"failure", message:e.response.data})
            setTimeout(() => {
                setAlert(null)
            }, 1500);
        }
    };

    return (
        <div className="flex items-center justify-center  bg-gray-100">
            {/* <div className=' w-full max-w-xs my-5'>
                <img src="./assets/login.jpg" alt="" />
            </div> */}

            <div className="w-full max-w-xs mt-5 ">
                <h2 className='text-3xl text-center mb-10'>Login</h2>
                <form className="bg-white bg-opacity-30 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Username
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
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
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
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Login
                        </button>
                        
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;