"use client";

import { MdOutgoingMail } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { useState } from "react";
import { showToast } from "@utils/showToast";

const Contact = () => {
  const phoneNumber = '919385352051';
  const wmessage = 'Hello, Pradeep Sakthi!';
  const recipientEmail = 'spradeepsakthi2004@gmail.com';
  const subject = 'Subject Here';
  const body = 'Body of the email';
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipientEmail}`;

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch('/api/send-mail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, name, description }),
    });

    setLoading(false);

    if (res.ok) {
      showToast('success');
    } else {
      showToast('error');
    }
  };

  return (
    <section className="  flex flex-col  ">
      <h1 className="text-center text-5xl font-bold font-palanquin dark:text-gray-300 max-sm:text-3xl max-md:text-4xl text-slate-600">Get in touch</h1>
      <div className=" flex justify-end items-center  max-lg:flex-col flex-row">
        <div className="flex flex-1 items-center flex-col gap-20">
          <button
            className="border-2 bg-black w-48 h-28 hover:scale-105 duration-300 dark:bg-white p-3 rounded-lg flex hover:cursor-pointer justify-center flex-col items-center"
            onClick={() => {
              window.open(gmailComposeUrl);
            }}
          >
            <MdOutgoingMail size={30} className="dark:text-slate-950 text-white" />
            <h5 className="dark:text-black text-white text-[12px]">spradeepsakthi2004@gmail.com</h5>
            <h5 className="text-[14px] hover:scale-105 duration-300  dark:text-black text-white flex justify-center items-center gap-2 mt-2">contact me <FaArrowRight /></h5>
          </button>
          <button
            className="border-2 bg-black w-48 h-28 hover:scale-105 duration-300 dark:bg-white p-3 rounded-lg flex hover:cursor-pointer justify-center flex-col items-center"
            onClick={() => {
              window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(wmessage)}`);
            }}
          >
            <FaWhatsappSquare size={30} className="dark:text-slate-950 text-white" />
            <h5 className="dark:text-black text-white text-[12px]">+91 93853 52051</h5>
            <h5 className="text-[14px] hover:scale-105 duration-300 flex dark:text-black text-white justify-center items-center gap-2 mt-2">contact me <FaArrowRight /></h5>
          </button>
        </div>
        <div className="flex flex-1 items-center justify-center mt-11">
          <form onSubmit={handleSubmit} className="mt-11 flex flex-col justify-center items-center">
            <div >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="bg-transparent border-2 px-14 py-4 w-auto rounded-2xl mb-7 border-black dark:border-white dark:text-white"
                required
              />
            </div>
            <div>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="bg-transparent border-2 px-14 py-4 w-auto rounded-2xl mb-7 border-black dark:border-white dark:text-white"
                required
              />
            </div>
            <div>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter Description"
                className="bg-transparent border-2 py-9 px-14 w-auto rounded-2xl mb-7 border-black dark:border-white dark:text-white"
                required
              ></textarea>
            </div>
            <button type="submit" disabled={loading} className="border-2 px-10 py-4 w-auto rounded-full mb-7 border-black dark:border-white dark:text-white hover:bg-black hover:text-white dark:hover:bg-white  dark:hover:text-black duration-150  ease-in">
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
