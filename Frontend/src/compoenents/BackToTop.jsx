import React, { useEffect, useState } from "react"
import { FaArrowUp } from "react-icons/fa"

const BackToTop = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300)
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-6 right-6 z-50
        w-12 h-12 rounded-full
        bg-[#222222] text-white
        flex items-center justify-center
        shadow-lg cursor-pointer
        transition-all duration-300
        hover:bg-[#222222cc] hover:-translate-y-1
        ${visible ? "opacity-100 scale-100" : "opacity-0 scale-0"}
      `}
      aria-label="Back to top"
    >
      <FaArrowUp className="text-lg" />
    </button>
  )
}

export default BackToTop
