import React from 'react'

const Contact = () => {
  return (
    <main class="container mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
      <h2 class="text-3xl font-semibold mb-6">Contact</h2>
      <p class="mb-6">If you have any questions or need more information, do not hesitate to contact us through the following form:</p>

      <form action="/send-message" method="POST" class="space-y-4">
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
          <input type="text" id="name" name="name" class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm" />
        </div>
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" id="email" name="email" class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm" />
        </div>
        <div>
          <label for="phone" class="block text-sm font-medium text-gray-700">Phone Number</label>
          <input type="tel" id="phone" name="phone" class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm" />
        </div>
        <div>
          <label for="subject" class="block text-sm font-medium text-gray-700">Subject</label>
          <input type="text" id="subject" name="subject" class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm" />
        </div>
        <div>
          <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
          <textarea id="message" name="message" rows="4" class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"></textarea>
        </div>
        <div>
          <label for="attachment" class="block text-sm font-medium text-gray-700">Attachment</label>
          <input type="file" id="attachment" name="attachment" class="mt-1 block w-full text-sm text-gray-500 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500" />
        </div>
        <div>
          <label for="newsletter" class="block text-sm font-medium text-gray-700">Subscribe to our newsletter</label>
          <input type="checkbox" id="newsletter" name="newsletter" class="mt-1 focus:outline-none focus:ring-purple-500 focus:border-purple-500" />
        </div>
        <div>
          <button type="submit" class="w-full bg-purple-900 text-white py-2 px-4 rounded-md shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">Send</button>
        </div>
      </form>

      <div class="mt-10">
        <h3 class="text-2xl font-semibold mb-4">Our Contact Information</h3>
        <p class="mb-2"><strong>Address:</strong> 123 Main Street, Springfield, USA</p>
        <p class="mb-2"><strong>Phone:</strong> (123) 456-7890</p>
        <p class="mb-2"><strong>Email:</strong> contact@ourcompany.com</p>
        <div id="map" class="w-full h-64 bg-gray-200 rounded-md"></div>
      </div>
      
      <script src="https://maps.google.com/maps/api/js?key=YOUR_API_KEY&callback=initMap" async defer></script>
      {/* <script>
        function initMap() {
          const mapOptions = {
            center: { lat: -33.578452628675485, lng: -69.03213047705357 },
            zoom: 16,
          };
          const map = new google.maps.Map(document.getElementById("map"), mapOptions);
        }
      </script> */}

    </main>
  )
}

export default Contact