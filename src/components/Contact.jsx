import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPaperPlane, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    form.action = 'https://formsubmit.co/naufalrakha2712@gmail.com'
    form.method = 'POST'
    form.submit()
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="contact py-24 bg-blue-500 dark:bg-gray-950 border-b-5 border-black px-6 md:px-12 relative overflow-hidden scroll-mt-24">
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400 border-b-8 border-l-8 border-black -translate-y-1/2 translate-x-1/2 rotate-45 z-0" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-pink-500 border-t-8 border-r-8 border-black translate-y-1/2 -translate-x-1/2 rotate-12 z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          
          <div className="lg:w-1/2">
            <h3 className="font-space text-5xl md:text-7xl font-bold uppercase mb-10 text-white tracking-widest leading-none drop-shadow-[5px_5px_0px_#000]">
              Get In<br/>Touch!
            </h3>
            
            <p className="font-mono text-xl text-white mb-16 max-w-lg bg-black p-6 border-4 border-white shadow-neo-large rotate-1">
              "Punya ide gila atau sekadar ingin menyapa? Mari berkolaborasi dan ciptakan sesuatu yang luar biasa bersama!"
            </p>

            <div className="space-y-8 font-mono text-white">
              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 bg-yellow-400 border-4 border-black flex items-center justify-center text-black dark:text-black text-2xl shadow-neo-mini group-hover:rotate-12 transition-transform">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-xs uppercase font-bold opacity-70">Email Me</p>
                  <a href="mailto:naufalrakha2712@gmail.com" className="text-xl font-black hover:underline underline-offset-4 decoration-yellow-400 decoration-4">naufalrakha2712@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 bg-pink-500 border-4 border-black flex items-center justify-center text-black dark:text-black text-2xl shadow-neo-mini group-hover:-rotate-12 transition-transform">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-xs uppercase font-bold opacity-70">Locaton</p>
                  <p className="text-xl font-black">Malang, Indonesia</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <motion.div 
              whileInView={{ scale: 1, opacity: 1 }}
              initial={{ scale: 0.9, opacity: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 border-6 border-black p-8 md:p-12 shadow-neo-large relative"
            >
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-20 h-20 bg-yellow-400 rounded-full border-4 border-black flex items-center justify-center text-3xl animate-spin-slow">
                 ✨
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="relative group">
                   <label htmlFor="contact-name" className="block font-space font-black uppercase text-sm mb-2">Nama Anda / Perusahaan</label>
                   <input 
                     id="contact-name"
                     type="text" 
                     name="name"
                     required
                     placeholder="John Doe"
                     value={formData.name}
                     onChange={handleChange}
                     className="w-full bg-gray-50 dark:bg-black border-4 border-black p-4 font-mono focus:bg-yellow-100 dark:focus:bg-gray-800 focus:outline-none transition-all placeholder:opacity-30"
                   />
                </div>

                <div className="relative group">
                   <label htmlFor="contact-email" className="block font-space font-black uppercase text-sm mb-2">Email Aktif</label>
                   <input 
                     id="contact-email"
                     type="email" 
                     name="email"
                     required
                     placeholder="john@example.com"
                     value={formData.email}
                     onChange={handleChange}
                     className="w-full bg-gray-50 dark:bg-black border-4 border-black p-4 font-mono focus:bg-pink-100 dark:focus:bg-gray-800 focus:outline-none transition-all placeholder:opacity-30"
                   />
                </div>

                <div className="relative group">
                   <label htmlFor="contact-message" className="block font-space font-black uppercase text-sm mb-2">Pesan Anda</label>
                   <textarea 
                     id="contact-message"
                     name="message"
                     rows="5"
                     required
                     placeholder="Apa yang ingin Anda katakan?"
                     value={formData.message}
                     onChange={handleChange}
                     className="w-full bg-gray-50 dark:bg-black border-4 border-black p-4 font-mono focus:bg-blue-100 dark:focus:bg-gray-800 focus:outline-none transition-all placeholder:opacity-30 resize-none"
                   />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-black text-white font-space font-black text-2xl uppercase p-6 border-6 border-black hover:bg-yellow-400 hover:text-black hover:border-black transition-all shadow-neo flex items-center justify-center gap-4 group"
                >
                  Kirim Pesan <FaPaperPlane className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact
