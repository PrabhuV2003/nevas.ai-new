import React, { useState } from 'react'

const ExtendingSlider = () => {
  const slides = [
    {
      title: 'AI Automation Demo',
      videoId: 'hs9_J89A2uU',
    },
    {
      title: 'Conversational AI',
      videoId: 'SrRUXGSbPsk',
    },
    {
      title: 'AI Dashboard Walkthrough',
      videoId: 'EGRyoTqpUZg',
    },
    {
      title: 'Voice Bot Example',
      videoId: '3tmd-gDcKmU9_owo',
    },
    {
      title: 'AI Use Case Overview',
      videoId: 'V1OUgX994z8',
    },
  ]

  const [active, setActive] = useState(0)

  return (
    <div className="w-full">

      {/* ================= MOBILE / TABLET ================= */}
      <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory md:hidden">
        {slides.map((s, i) => (
          <div
            key={i}
            className="min-w-[85%] h-[320px] snap-center rounded-xl overflow-hidden bg-black"
          >
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${s.videoId}`}
              title={s.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ))}
      </div>

      {/* ================= DESKTOP EXPANDING SLIDER ================= */}
      <div className="hidden md:flex h-[420px] w-full items-stretch">
        {slides.map((s, i) => {
          const isActive = active === i

          return (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="relative overflow-hidden transition-[flex] duration-500 ease-in-out
                         shadow-lg focus:outline-none flex items-end cursor-pointer mx-1 rounded-xl"
              style={{
                flex: isActive ? 2.8 : 0.2,
                backgroundColor: '#000',
              }}
            >
              {/* ACTIVE VIDEO */}
              {isActive ? (
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${s.videoId}?autoplay=1&mute=1&rel=0`}
                  title={s.title}
                  frameBorder="0"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <>
                  {/* THUMBNAIL */}
                  <img
                    src={`https://img.youtube.com/vi/${s.videoId}/hqdefault.jpg`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50" />

                </>
              )}

            </button>
          )
        })}
      </div>
    </div>
  )
}

export default ExtendingSlider
