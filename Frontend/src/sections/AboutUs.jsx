import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* -----------------------------------
         IMAGE ANIMATION
      ----------------------------------- */
      gsap.from(imageRef.current, {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      /* -----------------------------------
         LETTER BY LETTER HEADING
      ----------------------------------- */
      const letters = headingRef.current.querySelectorAll(".char");

      gsap.fromTo(
        letters,
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.04,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        }
      );

      /* -----------------------------------
         AI GLOW PULSE
      ----------------------------------- */
      gsap.fromTo(
        headingRef.current,
        {
          textShadow: "0 0 0px rgba(64,128,245,0)",
        },
        {
          textShadow: "0 0 20px rgba(64,128,245,0.8)",
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
          yoyo: true,
          repeat: 1,
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Utility to split heading into spans
  const splitText = (text) =>
    text.split("").map((char, i) => (
      <span key={i} className="char inline-block">
        {char === " " ? "\u00A0" : char}
      </span>
    ));

  return (
    <section className="about-us-sec" ref={sectionRef}>
      <div className="container">
        <div className="row items-center">
          <div className="col-lg-5">
            <div className="about-img" ref={imageRef}>
              <img
                src="https://aiero-tech-template.netlify.app/assets/images/layers/person.png"
                alt="AI Agency & Technology"
                className="w-full"
              />
            </div>
          </div>

          <div className="col-lg-7">
            <div className="about-content" ref={contentRef}>
              <h2 className="style-text">Neural Networks</h2>

              <div className="sec-title mb-0 white">
                <span className="sub-title">[ about ]</span>

                <h2
                  ref={headingRef}
                  className="title animated-heading leading-tight"
                >
                  {splitText(
                    "Pioneers in artificial intelligence solutions and innovation"
                  )}
                </h2>

                <p>
                  At AiDo, we are a leading AI services provider dedicated to
                  delivering innovative solutions that leverage artificial
                  intelligence to transform businesses.
                </p>

                <p className="paragraph md:w-[95%]">
                  Our team of experts specializes in cutting-edge AI
                  technologies, offering customized strategies and
                  implementations to help you stay ahead in today's
                  data-driven world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
