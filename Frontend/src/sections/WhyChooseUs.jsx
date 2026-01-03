import React from "react";

const POINTS = [
  {
    step: "01",
    title: "Business-First AI",
    description:
      "We start with your business goals and ROI, not with models or tools.",
  },
  {
    step: "02",
    title: "Proven Engineering",
    description:
      "Our team has delivered production-grade AI systems across industries.",
  },
  {
    step: "03",
    title: "Scalable by Design",
    description:
      "We architect AI solutions that grow with data, users, and complexity.",
  },
  {
    step: "04",
    title: "Long-Term Partner",
    description:
      "We don’t disappear after delivery — we evolve systems with you.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="w-full py-24 px-6 lg:px-14 bg-[#F2F2F2]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="max-w-4xl mb-20">
          <h2 className="font-cervino uppercase text-[30px] sm:text-[45px] leading-tight">
            Why Choose Nevas AI
          </h2>
          <p className="mt-4 text-[#555] leading-relaxed">
            What sets us apart is not just technology — it’s how we think,
            build, and partner.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Line */}
          <div className="hidden lg:block absolute top-6 left-0 right-0 h-[1px] bg-[#ccc]" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
            {POINTS.map((item, index) => (
              <div
                key={index}
                className="
                  group
                  relative
                  bg-transparent
                "
              >
                {/* Step */}
                <div
                  className="
                    w-12 h-12
                    rounded-full
                    border border-[#999]
                    flex items-center justify-center
                    text-sm text-[#666]
                    mb-6
                    bg-[#F2F2F2]
                    transition-all duration-300
                    group-hover:bg-black
                    group-hover:text-white
                  "
                >
                  {item.step}
                </div>

                <h3 className="font-cervino uppercase text-lg mb-3 text-[#111]">
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed text-[#555]">
                  {item.description}
                </p>

                {/* Hover underline */}
                <div className="mt-6 h-[1px] w-0 bg-black transition-all duration-300 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
