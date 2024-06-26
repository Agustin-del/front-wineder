import React from 'react';
import Form from '../components/Form';

const Contact = () => {
  return (
    <main className="container mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold mb-6">Contact</h2>
      <p className="mb-6">If you have any questions or need more information, do not hesitate to contact us through the following form:</p>

      <form action="/send-message" method="POST" className="space-y-4">
        <Form name="name" type="text" placeholder="Enter your name" />
        <Form name="email" type="email" placeholder="Enter your email" />
        <Form name="phone" type="tel" placeholder="Enter your phone number" />
        <Form name="subject" type="text" placeholder="Enter subject" />
        <Form name="message" type="text" placeholder="Enter message" />
        <div>
          <button type="submit" className="w-full bg-[#5E2A30] text-white py-2 px-4 rounded-md shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">Send</button>
        </div>
      </form>

      <div className="mt-10">
        <h3 className="text-2xl font-semibold mb-4">Our Contact Information</h3>
        <p className="mb-2"><strong>Address:</strong> 123 Main Street, Springfield, USA</p>
        <p className="mb-2"><strong>Phone:</strong> (123) 456-7890</p>
        <p className="mb-2"><strong>Email:</strong> contact@ourcompany.com</p>
        <div className="w-full h-64 bg-gray-200 rounded-md">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.0620712442646!2d-69.03260252494155!3d-33.57773760404111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967c25c8213c8b07%3A0xf1c5b7b7496f61c1!2sValle%20de%20Uco!5e0!3m2!1ses-419!2sar!4v1719345368926!5m2!1ses-419!2sar"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </main>
  );
};

export default Contact;
