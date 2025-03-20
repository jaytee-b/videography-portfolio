/* eslint-disable */


import emailjs from 'emailjs-com'
import { useState } from 'react';
import { RevealOnScroll } from '../RevealOnScroll';

export const Contact = () => {

    const [formData, setFormData] = useState({
        name:"",
        email:"",
        message:"",

    })
    

    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY).then((result)=>{
            alert("Message Sent!")
            setFormData({name:"", email:"", message:""})
        }).catch(() =>alert("Oops! Something went wrong! Please try again."))
    }
  return (
    <RevealOnScroll>
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
        
      <div className="px-4 w-150">
        <h2 className="text-2xl md:text-[30px] font-bold mb-6 text-center">
          {" "}
          Get in Touch
        </h2>
        <form action="" className="space-y-6" onSubmit={handleSubmit}>
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Name..."
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white transition focus:outline-none focus:border-[#22CD6E]/2 focus:bg-[#22CD6E]/10"
            />
          </div>

          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="example@gmail.com"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value })}
              className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white transition focus:outline-none focus:border-[#22CD6E]/2 focus:bg-[#22CD6E]/10"
            />
          </div>

          <div className="relative">
            <textarea
              
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Your message..."
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white transition focus:outline-none focus:border-[#22CD6E]/2 focus:bg-[#22CD6E]/10"
            />
          </div>
          <button className="w-full bg-[#22CD6E] text-black py-3 px-6 rounded font-medium transition reltive overflow-hidden hover:-translate-y-0.5 hover:sha"> Send Message

          </button>

          
        </form>
      </div>
      
    </section>
    </RevealOnScroll>
  );
};
