import React, { useState } from 'react'

const TABS = [
  {
    id: 'consulting',
    title: 'AI Consulting Services',
    heading: 'AI Consulting Services',
    description:
      'Not every idea is ready for full-scale AI implementation, and that’s okay. Our AI consulting and PoC services help you explore, validate, and de-risk your AI initiatives before making major investments.',
    points: [
      'AI Readiness Audits',
      'Cost-Benefit & ROI Analysis',
      'Discovery & Ideation Workshops',
      'Rapid PoC Development',
      'Scalable AI Roadmaps',
      'Executive Dashboards & Reporting',
    ],
  },
  {
    id: 'automation',
    title: 'Custom AI & ML Development',
    heading: 'Custom AI & ML Development',
    description:
      'We build AI and machine learning solutions from the ground up. The purpose of our AI app development company is to develop solutions tailored to your data, your use case, and your industry. We manage the full lifecycle of AI model development.',
    points: [
      'Predictive analytics',
      'Forecasting tools',
      'Recommendation systems',
      'Fraud detection',
      'Dynamic pricing models',
      'Image and text classification',
    ],
  },
  {
    id: 'analytics',
    title: 'Generative AI Development',
    heading: 'Generative AI Development',
    description:
      'As a leading name in the top generative AI development company list, we build GenAI-powered systems that think, write, talk, and create using the world’s most advanced language models. From chatbots to content creators, our tools are fine-tuned to deliver value fast.',
    points: [
      'LLM Integration',
      'Knowledge Embedding & Retrieval (RAG)',
      'Custom Fine-Tuning',
      'Enterprise-grade security',
      'Generative AI Copilots',
      'Real-time, context-aware responses',
    ],
  },
  {
    id: 'conversational',
    title: 'Conversational AI',
    heading: 'Conversational AI Development Services',
    description:
      'Get smart assistants for sales, support, onboarding, and internal operations.Our AI chatbot development company designs multilingual chatbots, voice bots, and AI agents for customer service  and engagement.',
    points: [
      'Custom Chatbots & Voicebots',
      'Omnichannel Availability',
      'RAG-Based Bots',
      'CRM & ERP Integration',
      'Data-Interactive Chatbots',
      'Multilingual Voice & Text Bots',
    ],
  },
  {
    id: 'vision',
    title: 'AI App Development',
    heading: 'AI App Development',
    description:
      'Known for the #1 AI app development company in India, we integrate smart features to your web and mobile apps, so they work better and faster. Your apps will anticipate user needs, deliver lightning-fast responses, and keep people engaged.',
    points: [
      'Voice, Vision & NLP Features',
      'Cross-Platform Compatibility',
      'Custom AI API Integration',
      'AI-Driven Personalization',
      'Real-Time Intelligence & Prediction',
      'Mobile & Edge Optimization',
    ],
  },
  {
    id: 'nlp',
    title: 'LLM Fine-Tuning & Customization',
    heading: 'LLM Fine-Tuning & Customization',
    description:
      'As an enterprise AI software development company, we help businesses train, fine-tune, and host LLMs like GPT, Claude, or LLaMA to their specific industry, data, and use cases. Plus, we ensure more relevant, secure, and high-performing AI experiences.',
    points: [
      'Private LLM Fine-Tuning',
      'Web Scraping for Real-Time Context',
      'Retrieval-Augmented Generation',
      'Custom Guardrails & Filters',
      'Generative AI Tasks',
      'Secure Hosting & Latency Optimization',
    ],
  },
  {
    id: 'mlops',
    title: 'Image-Based AI Solutions',
    heading: 'Image-Based AI Solutions',
    description:
      'We develop AI tools that understand, generate, and transform images with precision. From visual content creation to intelligent editing, custom solutions by our AI development company support a wide range of business needs.',
    points: [
      'Image-to-Text Summarizers',
      'AI Image Upscaling',
      'Text-to-Image Generation',
      'AI Outpainting & Background Fill',
      'AI Face Swapping',
      'AI-Powered Image Editing',
    ],
  },
  {
    id: 'product',
    title: 'AI Product Development',
    heading: 'AI Product Development',
    description:
      'AI is the foundation of modern software products. Being the best AI product development company in India, our team plan, prototype, and launch AI-first platforms that are impactful, and built for scale. From strategy to deployment, we partner with you at every step.',
    points: [
      'AI Strategy + Design + Engineering',
      'Built-in Analytics',
      'Rapid Prototyping and Usability Testing',
      'Seamless Integration',
      'Modular Architecture',
      'Multi-cloud Support',
    ],
  },
  {
    id: 'cloud',
    title: 'AIOps Services',
    heading: 'AIOps Services',
    description:
      'We help enterprises bring intelligence to their IT and  DevOps operations. Our team uses machine learning to detect anomalies, prevent outages, and accelerate root cause analysis. Our AIOps solutions add intelligence across observability and incident response pipelines.',
    points: [
      'Log & Metrics Analysis',
      'Cloud & Hybrid Environment Support',
      'AI/ML Workload & Infra Optimization',
      'Automated Remediation',
      'Predictive Alerting',
    ],
  },
]


const FeaturePoint = ({ text }) => (
  <div className="flex items-start gap-3">
    <span className="mt-1 w-5 h-5 flex items-center justify-center rounded-full border border-[#222] text-xs">
      ✓
    </span>
    <span className="font-cervino uppercase text-sm text-[#222]">
      {text}
    </span>
  </div>
)

const KeyFeatures = () => {
  const [activeTab, setActiveTab] = useState(TABS[0].id)
  const currentTab = TABS.find(tab => tab.id === activeTab)

  return (
    <section
      id="solutions"
      className="w-full min-h-screen py-16 px-6 lg:py-24 lg:px-14 bg-[#F2F2F2]"
    >
      {/* HEADER */}
      <div className="max-w-5xl mb-12">
        <h2 className="font-cervino text-[30px] sm:text-[45px] uppercase leading-tight">
          AI Development Service
          <br /> We Offer
        </h2>
      </div>

      {/* ================= MOBILE VIEW ================= */}
      <div className="sm:hidden space-y-4">
        {TABS.map(tab => {
          const isOpen = tab.id === activeTab
          return (
            <div
              key={tab.id}
              className={`rounded-xl overflow-hidden transition-all ${isOpen ? 'bg-white shadow-md' : 'border border-[#ddd]'
                }`}
            >
              <button
                onClick={() => setActiveTab(tab.id)}
                className="w-full px-4 py-4 text-left font-cervino text-lg uppercase flex justify-between items-center"
              >
                {tab.title}
                <span className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                  ⌄
                </span>
              </button>

              <div
                className={`grid transition-all duration-500 ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
              >
                <div className="overflow-hidden px-4 pb-4 space-y-4">
                  <p className="text-sm leading-7 text-[#444]">
                    {tab.description}
                  </p>

                  <div className="space-y-3">
                    {tab.points.map((point, idx) => (
                      <FeaturePoint key={idx} text={point} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* ================= DESKTOP VIEW ================= */}
      <div className="hidden sm:flex gap-6">

        {/* LEFT CONTENT */}
        <div className="w-[30%]">
          <div className="h-[350px] overflow-y-auto pr-2 flex flex-col gap-3 custom-scrollbar">
            {TABS.map(tab => {
              const isActive = tab.id === activeTab
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-xl cursor-pointer p-5 text-left uppercase font-cervino transition-all ${isActive
                    ? 'bg-gradient-to-r from-[#FA9E59] via-[#24AFCD] to-[#DE8DC9] shadow-md text-white'
                    : 'border border-[#666] text-[#666] hover:text-[#222]'
                    }`}
                >
                  {tab.title}
                </button>
              )
            })}
          </div>
        </div>

        {/* RIGHT TABS (SCROLLABLE) */}
        <div className="w-[70%] bg-white rounded-2xl p-10 shadow-sm min-h-[350px]">
          <h3 className="font-cervino uppercase text-[34px] leading-tight">
            {currentTab.heading}
          </h3>

          <p className="mt-4 text-[#444] text-sm lg:text-base leading-7 max-w-3xl">
            {currentTab.description}
          </p>

          <div className="mt-8 grid grid-cols-2 gap-y-7 gap-x-12">
            {currentTab.points.map((point, index) => (
              <FeaturePoint key={index} text={point} />
            ))}
          </div>
        </div>

      </div>

    </section>
  )
}

export default KeyFeatures
