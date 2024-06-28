import React from 'react'
import { useState, useEffect } from 'react';


const WineIncome = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <body class="bg-gray-100">
            {loading ? (
                <div className='flex items-center justify-center w-full h-screen bg-[#232323]'>
                    <img className='w-[300px]' src="./assets/copa.gif" alt="" />
                </div>) : (
                <div class="container mx-auto px-4 py-8">
                    <h1 class="text-3xl font-semibold text-gray-800 mb-6">Wine Provider Form</h1>

                    {/* <!-- Form --> */}
                    <form action="#" method="POST" class="bg-white shadow-md rounded-lg overflow-hidden">
                        {/* <!-- Wine Name --> */}
                        <div class="flex items-center border-b border-gray-200 px-6 py-4">
                            <label for="wine-name" class="text-gray-800 font-semibold w-32">Wine Name:</label>
                            <input type="text" id="wine-name" name="wine-name" placeholder="Enter wine name"
                                class="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                        </div>

                        {/* <!-- Wine Style --> */}
                        <div class="flex items-center border-b border-gray-200 px-6 py-4">
                            <label for="wine-style" class="text-gray-800 font-semibold w-32">Wine Style:</label>
                            <input type="text" id="wine-style" name="wine-style" placeholder="Enter wine style"
                                class="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                        </div>

                        {/* <!-- Wine Region --> */}
                        <div class="flex items-center border-b border-gray-200 px-6 py-4">
                            <label for="wine-region" class="text-gray-800 font-semibold w-32">Wine Region:</label>
                            <input type="text" id="wine-region" name="wine-region" placeholder="Enter wine region"
                                class="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                        </div>

                        {/* <!-- Wine Origin --> */}
                        <div class="flex items-center border-b border-gray-200 px-6 py-4">
                            <label for="wine-origin" class="text-gray-800 font-semibold w-32">Wine Origin:</label>
                            <input type="text" id="wine-origin" name="wine-origin" placeholder="Enter wine origin"
                                class="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                        </div>

                        {/* <!-- Wine Color --> */}
                        <div class="flex items-center border-b border-gray-200 px-6 py-4">
                            <label for="wine-color" class="text-gray-800 font-semibold w-32">Wine Color:</label>
                            <input type="text" id="wine-color" name="wine-color" placeholder="Enter wine color"
                                class="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                        </div>

                        {/* <!-- Wine Flavor --> */}
                        <div class="flex items-center border-b border-gray-200 px-6 py-4">
                            <label for="wine-flavor" class="text-gray-800 font-semibold w-32">Wine Flavor:</label>
                            <textarea id="wine-flavor" name="wine-flavor" placeholder="Enter wine flavor"
                                class="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"></textarea>
                        </div>

                        {/* <!-- Wine Tannins --> */}
                        <div class="flex items-center border-b border-gray-200 px-6 py-4">
                            <label for="wine-tannins" class="text-gray-800 font-semibold w-32">Wine Tannins:</label>
                            <input type="text" id="wine-tannins" name="wine-tannins" placeholder="Enter wine tannins"
                                class="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                        </div>

                        {/* <!-- Wine Alcohol Content --> */}
                        <div class="flex items-center border-b border-gray-200 px-6 py-4">
                            <label for="wine-alcohol" class="text-gray-800 font-semibold w-32">Wine Alcohol Content:</label>
                            <input type="text" id="wine-alcohol" name="wine-alcohol" placeholder="Enter wine alcohol content"
                                class="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                        </div>

                        {/* <!-- Wine Image --> */}
                        <div class="flex items-center border-b border-gray-200 px-6 py-4">
                            <label for="wine-image" class="text-gray-800 font-semibold w-32">Wine Image:</label>
                            <input type="file" id="wine-image" name="wine-image"
                                class="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                        </div>

                        {/* <!-- Submit Button --> */}
                        <div class="flex justify-end bg-gray-100 px-6 py-4">
                            <button type="submit"
                                class="bg-[#0070f3] hover:bg-blue-600 text-white px-4 py-2 rounded-lg focus:outline-none">Submit</button>
                        </div>
                    </form>
                    {/* <!-- End Form --> */}
                </div>
            )}
        </body>
    )
}

export default WineIncome