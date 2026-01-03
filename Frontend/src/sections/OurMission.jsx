import React, { useEffect, useRef, useState } from 'react'

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

const OurMission = () => {
  const { ref: headerRef, isInView: headerInView } = useInView()
  const { ref: leftRef, isInView: leftInView } = useInView()
  const { ref: rightRef, isInView: rightInView } = useInView()

  return (
    <div className='w-full min-h-screen overflow-hidden relative py-16 px-10 lg:py-24 lg:px-14 '>

      {/* BG Multi Colors */}
      <div className='absolute left-1/2 -translate-x-1/2 -bottom-[208px] w-[379px] h-[442px] bg-[#24AFCD] blur-[250px] z-10 opacity-80'></div>

      <div className='w-full h-full relative z-50'>

        {/* Heading + line */}
        <div
          ref={headerRef}
          className={`
            relative
            transform transition-all duration-700 ease-out
            ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
          `}
        >
          <h2 className='font-cervino text-[30px] leading-[45px] sm:text-[45px] sm:leading-[75px] uppercase'>
            Empowering Businesses Through
            <br /> Innovation
          </h2>
          <div className='absolute w-[40%] h-[1px] bg-[#666666] right-0 top-[120px]'></div>
        </div>

        {/* Content row */}
        <div className='w-full h-fit lg:h-[400px] mt-7 flex lg:flex-row flex-col justify-center items-center gap-5'>

          {/* Left: Image */}
          <div
            ref={leftRef}
            className={`
              w-full h-[300px] sm:h-[600px] lg:h-full
              transform transition-all duration-700 ease-out
              ${leftInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}
            `}
            style={{ transitionDelay: leftInView ? '150ms' : '0ms' }}
          >
            <img
              src='https://cdn.pixabay.com/photo/2025/03/22/20/26/ai-generated-9487507_1280.png'
              alt='AI mission visual'
              className='w-full h-full object-cover rounded-3xl'
            />
          </div>

          {/* Right: Text */}
          <div
            ref={rightRef}
            className={`
              w-full h-full
              transform transition-all duration-700 ease-out
              ${rightInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}
            `}
            style={{ transitionDelay: rightInView ? '250ms' : '0ms' }}
          >
            <h2 className='font-cervino text-2xl md:text-4xl leading-10 md:leading-12 lg:text-4xl lg:leading-16 text-[#222222] font-semibold uppercase'>
              At algoso, we&apos;re on a mission to drive business growth through
            </h2>
            <p className='font-cervino text-base sm:text-xl leading-8 capitalize mt-5 text-[#666666]'>
              cutting-edge AI automation solutions. With a team of AI experts and a proven track record, we&apos;re here to
              transform the way you operate.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurMission
