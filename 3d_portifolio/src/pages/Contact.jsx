import React, { useState } from 'react';
import emailjs from '@emailjs/browser'
import CTA_Profiles from '../components/CTA_Profiles';
import { FaUser, FaEnvelope, FaCommentDots } from 'react-icons/fa';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required.';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Email is invalid.';
    }

    if (form.message.trim().length < 10)
      newErrors.message = "Message must be at least 10 characters";

    return newErrors;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess('');
      return;
    }

    setErrors({});
    setSuccess('Sending...');

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLETE_ID,
      {
        from_name: form.name,
        from_email: form.email,
        to_name: 'Enrico Bessa',
        to_email: 'enricobessa@gmail.com',
        message: form.message,
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
    ).then(() => {
      setSuccess('Your message has been sent.');
      setForm({ name: '', email: '', message: '' });
    }).catch((error) => {
      console.error('Email error:', error);
      setSuccess('Something went wrong. Please try again.');
    });
  };

  return (
    <section className="w-full px-6 pt-28 pb-16 bg-gradient-to-br from-[#1F1F1F] via-[#2C2C2C] to-[#1F1F1F] shadow-lg">
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>

        <form className="w-full flex flex-col gap-7 mt-14" onSubmit={handleSubmit}>
          <div className="flex flex-wrap items-center space-x-2">
            <FaUser className="text-gray-400" />
            <label className="text-black-500 font-semibold"> Name</label>
          </div>

          <input type="text" name='name' className='input rounded border border-white p-2' placeholder='Maria' value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

          <div className="flex flex-wrap items-center space-x-2">
            <FaEnvelope className="text-gray-400" />
            <label className="text-black-500 font-semibold"> Email</label>
          </div>
          <input type="text" name='email' className='input rounded border border-white p-2' placeholder='email@exemple.com' value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

          <div className="flex flex-wrap items-center space-x-2">
            <FaCommentDots className="text-gray-400" />
            <label className="text-black-500 font-semibold"> Your Message</label>
          </div>
          <textarea type="text" name='message' rows={4} className='textarea rounded border border-white p-2' placeholder='Message you want to send' value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

          <div className='flex justify-end'>
            <button type='submit' className='btn'>Submit</button>
          </div>

          {success && <p className="text-green-400 text-sm mt-4">{success}</p>}
        </form>
      </div>

      <hr className="border-slate-50-200 mt-6" />
      <CTA_Profiles />
    </section>
  );
};

export default Contact;
