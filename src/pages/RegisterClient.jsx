import React, { useState , useEffect} from 'react';
import axios from 'axios';
import { Alert } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getRole } from '../redux/actions/roleActions';
import { login } from '../redux/actions/authActions';

const RegisterClient = () => {
    const [loading, setLoading] = useState(true);
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        address: ''
    });

    const [alert, setAlert] = useState(null)
    const [errors, setErrors] = useState({});
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };
   

    const validate = () => {
        let tempErrors = {};
        if (!form.firstName) tempErrors.firstName = 'First Name is required';
        if (!form.lastName) tempErrors.lastName = 'Last Name is required';
        if (!form.email) tempErrors.email = 'Email is required';
        if (!form.password) tempErrors.password = 'Password is required';
        if (form.password !== form.confirmPassword) tempErrors.confirmPassword = 'Passwords do not match';
        if (!form.address) tempErrors.address = 'Address is required';

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        validate()
        const requestBody = {
            email:form.email,
            password:form.password,
            name:form.firstName,
            lastName:form.lastName,
            address:form.address
        }
        try {
            const response = await axios.post("http://localhost:8080/api/auth/register/client", requestBody)
            
            setAlert({ type: 'success', message: 'Registration successful' })
            setTimeout (async () => {
                try {
                    const loginResponse = await axios.post("http://localhost:8080/api/auth/login", {
                        email:form.email,
                        password:form.password
                    })
                    dispatch(login(loginResponse.data))
                    setTimeout(async () => {
                        const currentResponse = await axios.get('http://localhost:8080/api/auth/current', {
                            headers: {
                                Authorization: `Bearer ${loginResponse.data}`
                            }
                        })
                        dispatch(getRole(currentResponse.data.role))
                        if (currentResponse.data.role === "admin") {
                            navigate('/admin')
                        }
            
                        if (currentResponse.data.role === "client") {
                            navigate('/')
                        }
                    }, 1000)
                } catch (e) {
                    console.error(e)
                }
            }, 1000)

        } catch (e) {
            setAlert({type:"failure", message: e.response.data})
            setTimeout(() => {
                setAlert(null)
            }, 1500)

        }
        setLoading(false)
    };
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);

    }, []);

    return (
        <div className="flex items-center justify-center ">
             {loading ? (
                <div className='flex items-center justify-center w-full h-screen bg-[#232323]'>
                    <img className='w-[300px]' src="./assets/copa.gif" alt="" />
                </div>) : (
            <div className="w-full max-w-md mx-auto">
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <h2 className="text-2xl font-bold text-center mb-6">Register </h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                                First Name
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={form.firstName}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="First Name"
                            />
                            {errors.firstName && <p className="text-red-500 text-xs italic">{errors.firstName}</p>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                                Last Name
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={form.lastName}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Last Name"
                            />
                            {errors.lastName && <p className="text-red-500 text-xs italic">{errors.lastName}</p>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Email"
                            />
                            {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={form.password}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Password"
                            />
                            {errors.password && <p className="text-red-500 text-xs italic">{errors.password}</p>}
                        </div>
                        
                        <div className="mb-4 flex flex-col gap-2">
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                value={form.confirmPassword}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Confirm Password"
                            />
                            </div>
                            <div>
                                <p>The password must have a number, an uppercase letter, a lowercase letter and eight characters.</p>
                            </div>
                            {errors.confirmPassword && <p className="text-red-500 text-xs italic">{errors.confirmPassword}</p>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                                Address
                            </label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                value={form.address}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Address"
                            />
                            {errors.address && <p className="text-red-500 text-xs italic">{errors.address}</p>}
                            
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                type="submit"
                                className="bg-[#5e2a30] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Register
                            </button>
                            {alert && <Alert color={alert.type}>{alert.message}</Alert>}
                        </div>
                    </form>
                </div>
            </div>
                )}
        </div>
    );
};

export default RegisterClient;