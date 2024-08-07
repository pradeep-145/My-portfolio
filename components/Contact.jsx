"use client";

import { MdOutgoingMail } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { useState } from "react";

const Contact = () => {
  const phoneNumber = '919385352051';
  const wmessage = 'Hello, Pradeep Sakthi!';
  const recipientEmail = 'spradeepsakthi2004@gmail.com';
    const subject = 'Subject Here'; // Optional
    const body = 'Body of the email'; // Optional
    const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipientEmail}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    const res = await fetch('/api/send-mail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, name, description }),
    });

    setLoading(false);

    if (res.ok) {
      setMessage('Email sent successfully');
    } else {
      setMessage('Failed to send email');
    }
  };
  return (
    <section className="mt-44 mb-48" >
    <h1 className="text-center text-5xl font-bold font-palanquin mt-6 dark:text-gray-300  max-sm:text-3xl max-md:text-4xl text-slate-600">Get in touch</h1>
    <div className="mt-8  flex justify-center items-end">
        <div className="flex flex-1 flex-col gap-20 ">
            <button className="border-2 bg-black w-48 h-28 hover:scale-105 duration-300 dark:bg-white p-3 rounded-lg flex hover:cursor-pointer justify-center flex-col  items-center" onClick={()=>{
                window.open(gmailComposeUrl);
            }}>
              
                <MdOutgoingMail  size={30} className="dark:text-slate-950 text-white "/>
                <h5 className="dark:text-black text-white text-[12px]">spradeepsakthi2004@gmail.com</h5>
                <h5 className="text-[14px] hover:scale-105 duration-300 flex justify-center items-center gap-2 mt-2">contact me <FaArrowRight /></h5>
            </button>
            <button className="border-2 bg-black w-48 h-28 hover:scale-105 duration-300 dark:bg-white p-3 rounded-lg flex hover:cursor-pointer justify-center flex-col  items-center" onClick={()=>{
                window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(wmessage)}`)}}>
              
                <FaWhatsappSquare size={30}className="dark:text-slate-950 text-white "/>
                <h5 className="dark:text-black text-white text-[12px]">+91 93853 52051</h5>
                <h5 className="text-[14px] hover:scale-105 duration-300 flex justify-center items-center gap-2 mt-2">contact me <FaArrowRight /></h5>
            </button>
        </div>
        <div className="flex flex-1">
        <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
      </div>
      <button type="submit" disabled={loading}>
        {loading ? 'Sending...' : 'Send Message'}
      </button>
      {message && <p>{message}</p>}
    </form>
        </div>
    </div>
     </section> 
  )
}

export default Contact