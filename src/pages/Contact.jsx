import React from 'react'

const Contact = () => {
  return (
    <main class="container mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
    <h2 class="text-3xl font-semibold mb-6">Contacto</h2>
    <p class="mb-6">Si tienes alguna pregunta o necesitas más información, no dudes en ponerte en contacto con nosotros a través del siguiente formulario:</p>
    
    <form action="/send-message" method="POST" class="space-y-4">
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700">Nombre</label>
        <input type="text" id="name" name="name" class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"/>
      </div>
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700">Correo Electrónico</label>
        <input type="email" id="email" name="email" class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"/>
      </div>
      <div>
        <label for="message" class="block text-sm font-medium text-gray-700">Mensaje</label>
        <textarea id="message" name="message" rows="4" class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"></textarea>
      </div>
      <div>
        <button type="submit" class="w-full bg-purple-900 text-white py-2 px-4 rounded-md shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">Enviar</button>
      </div>
    </form>
  </main>
  )
}

export default Contact