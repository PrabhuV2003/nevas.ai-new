import React, { useState, useEffect } from "react";

const testimonials = [
  {
    text: "Zen Doan is a business analyst, entrepreneur and media proprietor, and investor. She also known as the best selling book author.",
    name: "Zen",
    role: "Author",
    img: "https://user-images.githubusercontent.com/13468728/234031693-6bbaba7d-632c-4d7d-965f-75a76a549ce2.jpg",
  },
  {
    text: "Jonathan Koletic is an American internet entrepreneur and media proprietor, and investor. He is the founder of the multi-national technology company Treymont.",
    name: "Jonathan",
    role: "Treymont Inc.",
    img: "https://user-images.githubusercontent.com/13468728/234031617-2dfb19ea-01d0-4370-b63b-bb6bdfb4f78e.jpg",
  },
  {
    text: "Charlie Green is an European entrepreneur and media consultant, and investor. He is the founder of the Hallmark Inc.",
    name: "Charlie",
    role: "Hallmark Inc.",
    img: "https://user-images.githubusercontent.com/13468728/234031646-10533999-39e5-4c7b-ab54-d0299b13ce74.jpg",
  },
  {
    text: "Sarah Dam is an American internet entrepreneur and media proprietor, and investor. She is the founder of the multi-national technology company Zara.",
    name: "Sarah",
    role: "Zara Inc.",
    img: "https://github.com/ecemgo/ecemgo/assets/13468728/55116c98-5f9a-4b0a-9fdb-4911b52d5ef3",
  },
];

const TestimonialsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden py-16 px-10 lg:py-24 lg:px-14">

      {/* BG Blobs */}
      {["#FA9E59", "#24AFCD", "#DE8DC9"].map((c, i) => (
        <div
          key={i}
          className="absolute top-0 w-48 h-48 sm:w-[379px] sm:h-[442px]
          blur-[160px] sm:blur-[200px] opacity-70 pointer-events-none"
          style={{
            backgroundColor: c,
            left: i === 0 ? 0 : i === 1 ? "50%" : "auto",
            right: i === 2 ? 0 : "auto",
            transform: i === 1 ? "translateX(-50%)" : "none",
          }}
        />
      ))}

      <main className="relative z-10 mx-auto max-w-4xl text-center">
        <h2 className="font-cervino uppercase text-[30px] leading-[45px] sm:text-[55px] sm:leading-[75px]">
          What People Are Saying
        </h2>

        <p className="font-cervino mt-2
          text-xs sm:text-sm lg:text-base
          text-[#666666] uppercase">
          Here are some testimonials from our satisfied customers
        </p>

        {/* Slider */}
        <div className="relative mt-10 sm:mt-16 overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((item, idx) => (
              <div key={idx} className="w-full flex-shrink-0">

                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-0">

                  {/* Image */}
                  <img
                    src={item.img}
                    alt={item.name}
                    className="h-[120px] w-[120px]
                      sm:h-[180px] sm:w-[180px]
                      md:h-[400px] md:w-[320px]
                      rounded-lg object-cover"
                  />

                  {/* Card */}
                  <div className="md:-ml-24 bg-white/70 backdrop-blur-sm
                    rounded-lg p-6 sm:p-8 md:p-10
                    text-left max-w-xl">
                    <p className="text-sm sm:text-base lg:text-lg">
                      {item.text}
                    </p>

                    <div className="mt-6">
                      <h3 className="text-lg sm:text-xl font-semibold">
                        {item.name}
                      </h3>
                      <p className="text-sm">{item.role}</p>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicators */}
        <div className="mt-10 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-3 rounded-full bg-white transition-all duration-300
                ${currentIndex === i ? "w-8" : "w-3"}`}
            />
          ))}
        </div>
      </main>
    </section>
  );
};

export default TestimonialsSlider;
