import React, { useState } from 'react';

const RegisterProvider = () => {
    const [form, setForm] = useState({
        companyName: '',
        email: '',
        password: '',
        address: '',
        cuit: '',
        payMethod: false // Estado para almacenar el método de pago (checkbox)
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;

        setForm({
            ...form,
            [name]: newValue
        });
    };

    const validate = () => {
        let tempErrors = {};
        if (!form.companyName) tempErrors.companyName = 'Company Name is required';
        if (!form.email) tempErrors.email = 'Email is required';
        if (!form.password) tempErrors.password = 'Password is required';
        if (!form.address) tempErrors.address = 'Address is required';
        if (!form.cuit) tempErrors.cuit = 'CUIT is required';
        if (!form.payMethod) tempErrors.payMethod = 'You must select a payment method';

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log('Form submitted successfully', form);
            // Aquí puedes agregar la lógica para manejar el registro del proveedor
        }
    };

    return (
        <div className="flex items-center justify-center my-5 bg-gray-100">
            <div className="w-full max-w-md">
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <h2 className="text-2xl font-bold text-center mb-6">Register as a Provider</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="companyName">
                                Company Name
                            </label>
                            <input
                                type="text"
                                id="companyName"
                                name="companyName"
                                value={form.companyName}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Company Name"
                            />
                            {errors.companyName && <p className="text-red-500 text-xs italic">{errors.companyName}</p>}
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
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cuit">
                                CUIT (Clave Única de Identificación Tributaria)
                            </label>
                            <input
                                type="text"
                                id="cuit"
                                name="cuit"
                                value={form.cuit}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="CUIT"
                            />
                            {errors.cuit && <p className="text-red-500 text-xs italic">{errors.cuit}</p>}
                        </div>
                        {/* <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Payment Method</label>
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="payMethod"
                                    name="payMethod"
                                    checked={form.payMethod}
                                    onChange={handleChange}
                                    className="mr-2 leading-tight focus:outline-none"
                                />
                                <label htmlFor="payMethod" className="text-gray-700">
                                    Cash
                                </label>
                                <input
                                    type="checkbox"
                                    id="payMethod"
                                    name="payMethod"
                                    checked={form.payMethod}
                                    onChange={handleChange}
                                    className="mr-2 leading-tight focus:outline-none"
                                />
                                <label htmlFor="payMethod" className="text-gray-700">
                                    Card Credit
                                </label>
                                <input
                                    type="checkbox"
                                    id="payMethod"
                                    name="payMethod"
                                    checked={form.payMethod}
                                    onChange={handleChange}
                                    className="mr-2 leading-tight focus:outline-none"
                                />
                                <label htmlFor="payMethod" className="text-gray-700">
                                    Card Debit
                                </label>
                            </div> 
                            {errors.payMethod && <p className="text-red-500 text-xs italic">{errors.payMethod}</p>}
                        </div>*/}
                        <div className="flex items-center justify-between">
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterProvider;
