import React, { useEffect, useRef, useState } from 'react'
import { PiPhoneCallFill } from "react-icons/pi"
import { FaLocationDot } from "react-icons/fa6"
import { IoMdMail } from "react-icons/io"
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6"
import { SiInstagram } from "react-icons/si"
import { assets } from '../assets/assest'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

/* ---------- InView Hook ---------- */
const useInView = (threshold = 0.1) => {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, isInView }
}

/* ---------- Component ---------- */
const ContactSection = () => {
  const { ref: leftRef, isInView: leftInView } = useInView()
  const { ref: rightRef, isInView: rightInView } = useInView()

  /* ---------- Form State ---------- */
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  })

  const [loading, setLoading] = useState(false)

  /* ---------- Handlers ---------- */
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      })

      const data = await res.json()

      if (!res.ok) throw new Error(data.message || "Something went wrong")

      // Success toast
      toast.success('✨ Message sent successfully! Check your email for confirmation.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      })

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      })
    } catch (err) {
      // Error toast
      toast.error(err.message || '❌ Failed to send message. Please try again.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id='contact' className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-14">
      
      {/* Toast Container */}
      <ToastContainer />

      {/* BG Blobs */}
      <div className="absolute left-0 top-32 w-48 h-60 bg-[#FA9E59] blur-[160px] opacity-30" />
      <div className="absolute left-1/2 -translate-x-1/2 top-32 w-48 h-60 bg-[#24AFCD] blur-[160px] opacity-30" />
      <div className="absolute right-0 top-32 w-48 h-60 bg-[#DE8DC9] blur-[200px] opacity-30" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* LEFT CARD */}
          <div
            ref={leftRef}
            className={`w-full lg:w-1/2 bg-[#222222] rounded-2xl p-8 sm:p-10 relative transition-all duration-00
            ${leftInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'}`}
          >
            <img
              src={assets.john_c}
              alt=""
              className="hidden sm:block absolute bottom-0 -right-10 w-[260px]"
            />

            <div className="relative z-10 space-y-10 text-white">
              <div>
                <h2 className="font-cervino text-2xl sm:text-3xl">Contact Information</h2>
                <p className="text-[#aaaaaa] mt-2">Say something to start a live chat!</p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-6 items-center">
                  <PiPhoneCallFill />
                  <span>+1012 3456 789</span>
                </div>
                <div className="flex gap-6 items-center">
                  <IoMdMail />
                  <span>demo@gmail.com</span>
                </div>
                <div className="flex gap-6 items-start">
                  <FaLocationDot className="mt-1" />
                  <span>132 Dartmouth Street Boston, Massachusetts</span>
                </div>
              </div>

              <div className="flex gap-4">
                {[FaFacebookF, SiInstagram, FaLinkedinIn].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition">
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <form
            ref={rightRef}
            onSubmit={handleSubmit}
            className={`w-full lg:w-1/2 space-y-8 transition-all duration-00
            ${rightInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {["firstName", "lastName", "email", "phone"].map((field, i) => (
                <div key={i} className="flex flex-col">
                  <label className="text-sm text-[#8D8D8D] capitalize">{field.replace(/([A-Z])/g, ' $1')}</label>
                  <input
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                    className="border-b-2 border-[#8D8D8D] py-2 text-lg outline-none bg-transparent"
                    required
                  />
                </div>
              ))}
            </div>

            <div className="flex flex-col">
              <label className="text-sm text-[#8D8D8D]">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                required
                className="border-b-2 border-[#8D8D8D] text-lg outline-none bg-transparent resize-none"
              />
            </div>

            <div className="text-right">
              <button
                disabled={loading}
                className="w-full sm:w-[200px] h-[50px] bg-[#222222] text-white uppercase hover:bg-[#222222cc] transition disabled:opacity-50 disabled:cursor-not-allowed rounded"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>

        </div>
      </div>
    </section>
  )
}

export default ContactSection