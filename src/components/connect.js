'use client';

import { useState } from 'react';

function Connect() {

 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: '',
  });

  const [statusMessage, setStatusMessage] = useState('');
 const [statusType, setStatusType] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage('');
    setStatusType('');

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok) {
        setStatusMessage('Form submitted successfully. Our team will contact you soon.');
        setStatusType('success');
        setFormData({ name: '', email: '', phone: '', address: '', message: '' });
      } else {
        setStatusMessage('Internal error occurred. Please try again later.');
        setStatusType('error');
      }
    } catch (err) {
      setStatusMessage('Something went wrong. Please check your connection.');
      setStatusType('error');
    }
  };


  return (
    <section
      className="bg-no-repeat bg-cover bg-center pt-16 text-white" id="contact"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/Product.svg')",
      }}
      aria-label="Connect Section"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 con-custom justify-items-center">
        {/* Left Side - Info */}
        <div className="flex flex-col  gap-2 lg:gap-10">
          <p className="tag">Get In Touch</p>
          <h2 className="tag-head font-bold">
            Need A4 Paper in<br />Bulk? Let's Connect
          </h2>
          <p className="text-gray-300 text-xl leading-loose">
          We’re here to assist with pricing, availab
          ility, and delivery  send us your inquiry today.</p>
          <p className="font-medium ">📞 +91-56 131 2323</p>
          <p className="font-medium">✉️ info@ppmuae.com</p>
        </div>

   <form
      onSubmit={handleSubmit}
      className="bg-white rounded-lg p-8 -mb-7 md:max-w-md w-full shadow-lg border-b-[4.67px] border-b-[#115F85]"
    >
      <h3 className="text-gray-900 font-semibold mb-4 text-lg">Let's Connect</h3>

      <div className="space-y-4">
        <input
          type="text"
          required
          placeholder="Enter your name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 rounded-lg bg-[rgba(189,196,203,0.21)] text-black placeholder:text-[rgba(135,135,135,1)] border-none outline-none"
        />

        <div className="flex gap-4">
          <input
            type="email"
            required
            placeholder="Enter your mail"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-[rgba(189,196,203,0.21)] text-black placeholder:text-[rgba(135,135,135,1)] border-none outline-none"
          />
          <input
            type="text"
            required
            placeholder="Enter your Phone Number"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-[rgba(189,196,203,0.21)] text-black placeholder:text-[rgba(135,135,135,1)] border-none outline-none"
          />
        </div>

        <input
          type="text"
          required
          placeholder="Address with Pincode"
          value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          className="w-full px-4 py-3 rounded-lg bg-[rgba(189,196,203,0.21)] text-black placeholder:text-[rgba(135,135,135,1)] border-none outline-none"
        />

        <textarea
          rows={4}
          placeholder="Message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 rounded-lg bg-[rgba(189,196,203,0.21)] text-black placeholder:text-[rgba(135,135,135,1)] border-none outline-none resize-none"
        ></textarea>

        <button
          type="submit"
          className="submission-box text-white py-3 px-6 font-semibold"
        >
          Request a Quote
        </button>

        {statusMessage && (
          <p
            className={`mt-4 text-sm ${
              statusType === 'success' ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {statusMessage}
          </p>
        )}
      </div>
    </form>


      </div>
    </section>
  );
}

export default Connect;
