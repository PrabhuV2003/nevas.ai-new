import React from "react";
import { assets } from "../assets/assest";

/* ---------- IMAGE ICONS ---------- */
const ICON_IMAGES = {
  ml: {
    default: assets.ML_B,
    hover: assets.ML_W,
  },
  nlp: {
    default: assets.NLP_B,
    hover: assets.NLP_W,
  },
  vision: {
    default: "/icons/vision.png",
    hover: "/icons/vision-hover.png",
  },
  genai: {
    default: assets.GenerativeAI_B,
    hover: assets.GenerativeAI_W,
  },
  rl: {
    default: assets.ReinforcementLearning_B,
    hover: assets.ReinforcementLearning_W,
  },
  edge: {
    default: assets.EdgeAI_B,
    hover: assets.EdgeAI_W,
  },
  dp: {
    default: assets.DL_B,
    hover: assets.DL_W,
  },
  xai: {
    default: assets.XAI_B,
    hover: assets.XAI_W,
  },
  aiethics: {
    default: assets.AIEthics_B,
    hover: assets.AIEthics_W,
  },
};

/* ---------- DATA ---------- */
const SPECIALIZATIONS = [
  {
    title: "Machine Learning",
    icon: "ml",
    description:
      "We build ML models that can predict, classify, and recommend by learning from data over time.",
  },
  {
    title: "Natural Language Processing",
    icon: "nlp",
    description:
      "Our NLP systems understand, analyze, and generate human language.",
  },
  {
    title: "Computer Vision",
    icon: "vision",
    description:
      "We use image and video analysis to power applications like defect detection, face recognition, and AR apps.",
  },
  {
    title: "Generative AI",
    icon: "genai",
    description:
      "Our affordable generative AI development company builds applications that create new content using advanced LLMs and transformers.",
  },
  {
    title: "Reinforcement Learning",
    icon: "rl",
    description:
      "Our AI-based software development company develops systems that learn optimal actions through feedback.",
  },
  {
    title: "Edge AI",
    icon: "edge",
    description:
      "We design lightweight AI models that run on devices like sensors, cameras, or IoT devices for real-time decisions.",
  },
  {
    title: "Deep Learning",
    icon: "dp",
    description:
      "Our neural networks power complex tasks like speech recognition, emotion detection, and advanced predictions.",
  },
  {
    title: "Explainable AI (XAI)",
    icon: "xai",
    description:
      "We build AI systems that provide transparency and reasoning behind predictions.",
  },
  {
    title: "AI Ethics & Bias Mitigation",
    icon: "aiethics",
    description:
      "We implement fairness checks and bias mitigation strategies to ensure responsible AI outcomes.",
  },
];

/* ---------- COMPONENT ---------- */
const AiSpecializations = () => {
  return (
    <section className="w-full py-24 px-6 lg:px-14 bg-[#F2F2F2]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="max-w-4xl mb-16">
          <h2 className="font-cervino uppercase text-[30px] sm:text-[45px] leading-tight">
            Specialized Areas of Artificial <br /> 
            Intelligence We Excel In
          </h2>
          <p className="mt-4 text-[#555]">
            Core AI capabilities we leverage to solve complex business challenges.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {SPECIALIZATIONS.map((item, index) => {
            const icon = ICON_IMAGES[item.icon];

            return (
              <div
                key={index}
                className="
                  group
                  rounded-3xl
                  p-8
                  border border-[#ccc]
                  bg-transparent
                  transition-all duration-300
                  hover:bg-white
                  hover:shadow-lg
                  hover:-translate-y-1
                "
              >
                {/* Icon Wrapper */}
                <div
                  className="
                    w-12 h-12 rounded-xl
                    flex items-center justify-center
                    mb-6
                    border border-[#999]
                    overflow-hidden
                    transition-all duration-300
                    group-hover:bg-black
                  "
                >
                  {/* Default Image */}
                  <img
                    src={icon.default}
                    alt={item.title}
                    className="w-6 h-6 object-contain transition-opacity duration-300 group-hover:opacity-0"
                  />

                  {/* Hover Image */}
                  <img
                    src={icon.hover}
                    alt={`${item.title} hover`}
                    className="w-6 h-6 object-contain absolute opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                </div>

                <h3 className="font-cervino uppercase text-lg mb-4 text-[#111]">
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed text-[#555]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default AiSpecializations;
