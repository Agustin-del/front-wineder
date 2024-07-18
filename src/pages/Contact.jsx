import React from 'react';
import Form from '../components/Form';
import { useState, useEffect } from 'react'

const Contact = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);

  }, []);

  return (
    <main className=''>
      {loading ? (
        <div className='flex items-center justify-center w-full h-screen bg-[#232323]'>
          <img className='w-[300px]' src="./assets/copa.gif" alt="" />
        </div>) : (
        <div className="container mx-auto my-10 p-6  bg-red-100 rounded-lg  lg:w-[40%] md:w-[60%] border-2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">

          <div className="flex items-center justify-center ">
            <div className="lg:w-[90%]">
              <h2 className="text-3xl text-center font-semibold mb-6 lg:text-5xl">Contact</h2>
              <p className="mb-6 text-sm md:text-base">If you have any questions or need more information, do not hesitate to contact us through the following form:</p>

              <form action="/send-message" method="POST" className="flex flex-col gap-2">
                <div className="lg:flex lg:flex-wrap lg:gap-2 ">
                  <Form  name="Name" type="text" placeholder="Enter your name" />
                  <Form name="Email" type="email" placeholder="Enter your email" />
                  <Form name="Phone" type="tel" placeholder="Enter your phone number" />
                  <Form name="Subject" type="text" placeholder="Enter subject" />
                </div>
                <div className="p-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">Your Message</label>
                  <textarea id="message" className="w-full border-gray-300" placeholder='Enter your message'></textarea>
                </div>
                <div className="">
                  <button type="submit" className="w-full bg-[#5E2A30] text-white py-2 px-4 rounded-md shadow-sm hover:bg-[#a0767b] hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">Send</button>
                </div>
              </form>
            </div>
          </div>

          <div className="mt-10 lg:flex lg:items-center lg:gap-2 ">
            <div className="md:flex md:flex-col md:items-center lg:items-start">
              <h3 className="text-2xl lg:text-xl font-semibold mb-4">Our Contact Information</h3>
              <p className="mb-2 lg:text-sm"><strong>Address:</strong> 123 Main Street, Valle de Uco, Argentina</p>
              <p className="mb-2 lg:text-sm"><strong>Phone:</strong> (123) 456-7890</p>
              <p className="mb-2 lg:text-sm"><strong>Email:</strong> contact@wineder.com</p>
              </div>
            <div className="w-full lg:w-[75%] h-64 bg-gray-200 rounded-md">
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
        </div>
      )}
    </main>
  );
};

export default Contact;
