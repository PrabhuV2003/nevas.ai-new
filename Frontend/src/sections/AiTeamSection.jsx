import React from "react";

const roles = [
  {
    title: "AI Engineer",
    expertise:
      "Generative AI, NLP, LLMs (GPT-4, Claude), Prompt Engineering, RAG Systems",
    useCases:
      "AI copilots, chatbots, document automation, intelligent search",
  },
  {
    title: "ML Engineer",
    expertise:
      "Predictive modeling, Computer Vision, Time-series analysis, MLOps",
    useCases:
      "Forecasting, personalization, quality inspection, risk scoring",
  },
  {
    title: "Data Scientist",
    expertise:
      "Data wrangling, statistical modeling, model evaluation, feature engineering",
    useCases:
      "Churn prediction, segmentation, A/B testing, business insights",
  },
];

const AiTeamSection = () => {
  return (
    <section className="relative font-cervino overflow-hidden py-24 px-6 md:px-12 bg-gradient-to-br from-[#f7f8f8] via-[#eef2f3] to-[#f9f9f9]">

                    {/* BG Blobs */}
            <div className="absolute left-0 -bottom-32  w-48 h-60 sm:w-[379px] sm:h-[442px] bg-[#FA9E59] blur-[160px] sm:blur-[200px] opacity-60" />
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-32 w-48 h-60 sm:w-[379px] sm:h-[442px] bg-[#24AFCD] blur-[160px] sm:blur-[200px] opacity-60" />
            <div className="absolute right-0 -bottom-32 w-48 h-60 sm:w-[379px] sm:h-[442px] bg-[#DE8DC9] blur-[160px] sm:blur-[200px] opacity-60" />
            
            <div className="absolute left-1/2 -translate-x-1/2 -top-32 w-48 h-60 sm:w-[379px] sm:h-[442px] bg-[#24AFCD] blur-[160px] sm:blur-[200px] opacity-60" />

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="max-w-3xl mb-16">
          <h2 className="font-cervino text-4xl md:text-5xl font-light uppercase tracking-wide text-black">
            Build Your AI Team
          </h2>
          <p className="font-cervino mt-4 text-gray-600 leading-relaxed">
            Assemble a high-impact AI team with domain experts who design,
            deploy, and scale intelligent systems aligned with your business
            goals.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {roles.map((role, index) => (
            <div
              key={index}
              className="relative bg-white/70 backdrop-blur-md rounded-3xl p-8 border border-black/10 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl uppercase tracking-wide mb-6">
                Hire {role.title}
              </h3>

              <div className="mb-6">
                <p className="text-sm uppercase text-gray-500 mb-2">
                  Expertise
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {role.expertise}
                </p>
              </div>

              <div className="mb-8">
                <p className="text-sm uppercase text-gray-500 mb-2">
                  Use Cases
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {role.useCases}
                </p>
              </div>

              <button className="mt-auto inline-flex items-center gap-2 text-sm uppercase tracking-wide border border-black px-6 py-3 rounded-full hover:bg-black hover:text-white transition-all">
                Get Started
                <span className="text-lg">↗</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AiTeamSection;
