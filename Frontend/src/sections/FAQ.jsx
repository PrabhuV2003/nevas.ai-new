import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";

const faqData = [
  {
    q: "What is automation?",
    a: "AI automation refers to the integration of artificial intelligence (AI) technologies into various processes and tasks to streamline operations, enhance efficiency, and reduce the need for human intervention. It involves using algorithms, machine learning, and robotics to automate repetitive and complex tasks."
  },
  {
    q: "How does AI automation help businesses?",
    a: "AI automation helps businesses reduce costs, increase productivity, minimize errors, and make data-driven decisions faster by automating repetitive and time-consuming workflows."
  },
  {
    q: "Is AI automation suitable for small businesses?",
    a: "Yes. Small businesses can start with simple automations like chatbots, CRM automation, email workflows, and reporting to save time and scale efficiently."
  },
  {
    q: "Do I need technical knowledge to use automation?",
    a: "Not necessarily. Many automation tools are no-code or low-code, allowing non-technical users to build workflows easily."
  },
  {
    q: "Is AI automation secure?",
    a: "When implemented correctly with proper security policies, AI automation is highly secure and often safer than manual processes."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='w-full h-fit overflow-hidden relative py-16 px-10 lg:py-24 lg:px-14'>
      <div className='w-full h-full relative z-50'>

        <h2 className='font-cervino uppercase text-center text-[30px] leading-[45px] sm:text-[45px] sm:leading-[75px]'>
          Frequently Asked Questions
        </h2>

        <p className='font-cervino mt-2 text-center text-xs sm:text-sm lg:text-base text-[#666666] uppercase'>
          Here are some of the most frequently asked questions about our automation services
        </p>

        <div className='sm:w-[80%] m-auto h-full mt-14'>
          {faqData.map((item, index) => (
            <div
              key={index}
              className='w-full text-[#222222] border-b border-[#555555] mb-3'
            >
              {/* Question */}
              <div
                onClick={() => toggleFAQ(index)}
                className='w-full flex items-center justify-between cursor-pointer py-4'
              >
                <p className='font-cervino uppercase sm:text-xl leading-8'>
                  {item.q}
                </p>

                <IoIosArrowDown
                  className={`text-xl transition-transform duration-300 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </div>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeIndex === index ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className='font-cervino text-sm sm:text-base leading-8 text-[#777777] pb-5'>
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default FAQ;
