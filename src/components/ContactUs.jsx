import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ContactUs = () => {
    const navigation = useNavigate();
  return (
    <div className="bg-black text-white w-screen h-screen p-6">
     <Link className="text-2xl font-semibold text-zinc-400">
          <i
            onClick={() => navigation(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-line"
          ></i>
          <small className="ml-1 font-semibold text-sm"></small>
        </Link>
      
      <main className="max-w-4xl mx-auto py-10">
        <section className="text-center">
          <h2 className="text-2xl font-semibold">Get in Touch</h2>
          <p className="mt-4 text-gray-300">
            Have any questions or inquiries? Feel free to reach out to us.
          </p>
        </section>
        
        <section className="mt-10">
          <h2 className="text-xl font-semibold">Contact Information</h2>
          <ul className="mt-4 text-gray-300 list-none">
            <li><strong>Email:</strong> <a href="mailto:consistentcoderdatta@gmail.com" className="text-blue-400 hover:underline">consistentcoderdatta@gmail.com</a></li>
            <li><strong>Phone:</strong> <a href="tel:+919579011569" className="text-blue-400 hover:underline">+91 9579011569</a></li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default ContactUs;
