import React from 'react'

const Carrito = () => {
  return (
    <div>
       
        <body class="bg-gray-100">
             <div class="container mx-auto px-4 py-8">
        <h1 class="text-3xl font-semibold text-gray-800 mb-6">Shopping Cart</h1>


        <div class="bg-white shadow-md rounded-lg overflow-hidden">
          
            <div class="flex items-center justify-between border-b border-gray-200 px-6 py-4">
                <div class="flex items-center space-x-4">
                    <img src="./assets/vino-tinto.png   " alt="Product" class="h-16 w-16 object-cover rounded"/>
                    <div>
                        <p class="text-gray-800 font-semibold">Product Name</p>
                        <p class="text-gray-600">Description of the product.</p>
                    </div>
                </div>
                <div>
                    <p class="text-gray-800 font-semibold">$24.99</p>
                </div>
            </div>
         
            <div class="flex items-center justify-between border-b border-gray-200 px-6 py-4">
                <div class="flex items-center space-x-4">
                    <img src="./assets/vino-rosado.png" alt="Product" class="h-16 w-16 object-cover rounded"/>
                    <div>
                        <p class="text-gray-800 font-semibold">Another Product</p>
                        <p class="text-gray-600">Description of another product.</p>
                    </div>
                </div>
                <div>
                    <p class="text-gray-800 font-semibold">$19.99</p>
                </div>
            </div>
          

        
            <div class="flex justify-end items-center bg-gray-100 px-6 py-4">
                <div class="text-gray-800 font-semibold mr-4">Subtotal:</div>
                <div class="text-xl text-gray-800">$44.98</div>
            </div>
           
        </div>
        
        <div class="flex justify-end mt-6 gap-4">
            <button class="bg-white border-2 border-[#73383E] hover:bg-blue-600 text-[#73383E] px-4 py-2 rounded-lg">Clear basket</button>
            <button class="bg-[#73383E] hover:bg-blue-600 text-white px-4 py-2 rounded-lg">Checkout</button>
        </div>
        
    </div>
</body>
    </div>
  )
}

export default Carrito