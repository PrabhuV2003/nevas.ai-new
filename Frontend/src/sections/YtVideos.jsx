import React, { useEffect, useRef, useState } from 'react'
import ExtendingSlider from '../compoenents/ExtendingSlider'

const useInView = (threshold = 0.2) => {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsInView(true)
            observer.unobserve(entry.target) // animate once
          }
        })
      },
      { threshold }
    )

    observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [threshold])

  return { ref, isInView }
}

const YtVideos = () => {
  const { ref: headerRef, isInView: headerInView } = useInView()
  const { ref: sliderRef, isInView: sliderInView } = useInView()

  return (
    <div className='w-full md:min-h-screen overflow-hidden relative py-16 px-10 lg:py-24 lg:px-14 '>

      {/* BG Multi Colors */}
      <div className='absolute left-0 top-[208px] w-[379px] h-[442px] bg-[#FA9E59] blur-[200px] opacity-80'></div>
      <div className='absolute left-1/2 -translate-x-1/2 top-[208px] w-[379px] h-[442px] bg-[#24AFCD] blur-[200px] opacity-80'></div>
      <div className='absolute right-0 top-[208px] w-[379px] h-[442px] bg-[#DE8DC9] blur-[250px] opacity-80'></div>
      <div className='absolute left-1/2 -translate-x-1/2 -bottom-[208px] w-[379px] h-[442px] bg-[#24AFCD] blur-[250px] z-10 opacity-30'></div>
      <div className=' absolute left-1/2 -translate-x-1/2 -bottom-[208px] w-[379px] h-[442px] bg-[#24AFCD] blur-[250px] opacity-80 '></div>

      <div className='w-full h-full relative z-50'>

        {/* Heading + subtext */}
        <div
          ref={headerRef}
          className={`
            max-w-5xl space-y-2
            transform transition-all duration-700 ease-out
            ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
          `}
        >
          <h2 className='font-cervino text-[30px] leading-[45px] sm:text-[45px] sm:leading-[75px] uppercase'>
            There are so many digital
            <br />
            marketing agencies out
          </h2>
          <p className='font-cervino text-sm leading-7 text-[#666666]'>
            So, we bet you’re wondering…
          </p>
        </div>

        {/* Slider – slide in from RIGHT */}
        <div
          ref={sliderRef}
          className={`
            w-full h-full mt-7
            transform transition-all duration-700 ease-out
            ${sliderInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}
          `}
          style={{ transitionDelay: sliderInView ? '150ms' : '0ms' }}
        >
          <ExtendingSlider />
        </div>
      </div>
    </div>
  )
}

export default YtVideos
