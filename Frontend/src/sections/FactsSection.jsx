import React, { useEffect, useRef, useState } from 'react'

const FactsSection = () => {

    const primaryStat = {
        value: "96%",
        title: "Increase in efficiency",
        description: "Say goodbye to manual, time-consuming tasks. Our streamlined automations elevate efficiency so your team can focus on strategic initiatives."
    }

    const secondaryStats = [
        {
            value: "34%",
            title: "Reduction in operational costs",
            description:
                "Experience substantial savings as AI-driven automation optimizes resource allocation and minimizes wastage.",
        },
        {
            value: "96%",
            title: "Customer satisfaction",
            description:
                "Delight your customers with personalized, responsive journeys that boost satisfaction and loyalty.",
        },
        {
            value: "51%",
            title: "Rise in revenue generation",
            description:
                "Unlock new revenue streams with data-driven insights, smarter cross-sell and upsell opportunities.",
        },
    ];

    // Reusable hook for scroll in-view
    const useInView = () => {
        const ref = useRef(null);
        const [isInView, setIsInView] = useState(false);

        useEffect(() => {
            const element = ref.current;
            if (!element) return;

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setIsInView(true);
                            observer.unobserve(entry.target); // animate only once
                        }
                    });
                },
                {
                    threshold: 0.2,
                }
            );

            observer.observe(element);

            return () => {
                if (element) observer.unobserve(element);
            };
        }, []);

        return { ref, isInView };
    };

    function StatBlock({ stat, delay = 0 }) {
        const { ref, isInView } = useInView();

        return (
            <article
                ref={ref}
                className={`
                    w-full h-full
                    transform transition-all duration-700 ease-out text-center sm:text-start
                    ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                `}
                style={{ transitionDelay: `${delay}ms` }}
            >
                <p className='font-poppins font-bold text-8xl text-[#B4B4B4] leading-20 uppercase mb-3'>
                    {stat.value}
                </p>
                <h2 className='font-cervino font-semibold text-2xl text-[#222222] leading-7 uppercase mb-3'>
                    {stat.title}
                </h2>
                <p className='font-cervino text-base leading-7 text-[#666666]'>
                    {stat.description}
                </p>
            </article>
        )
    }

    // Top text block animation
    const { ref: headerRef, isInView: headerInView } = useInView();

    return (
        <div className='w-full min-h-screen overflow-hidden relative py-16 px-10 lg:py-24 lg:px-14 ' id='about-us'>

            {/* BG Multi Colors */}
            <div className='absolute left-0 -bottom-[208px] w-[379px] h-[442px] bg-[#FA9E59] blur-[200px] opacity-80 pointer-events-none'></div>
            <div className='absolute left-1/2 -translate-x-1/2 -bottom-[208px] w-[379px] h-[442px] bg-[#24AFCD] blur-[200px] opacity-80 pointer-events-none'></div>
            <div className='absolute right-0 -bottom-[208px] w-[379px] h-[442px] bg-[#DE8DC9] blur-[200px] opacity-80 pointer-events-none'></div>

            <div className='w-full h-full space-y-16 relative z-50'>
                <div className='grid gap-10 grid-cols-1 lg:grid-cols-3 items-center'>

                    {/* Heading + intro text */}
                    <div
                        ref={headerRef}
                        className={`
                            col-span-0 lg:col-span-2 space-y-6
                            transform transition-all duration-700 ease-out
                            ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                        `}
                    >
                        <h2 className='font-cervino text-[25px] leading-[45px] sm:text-[45px] sm:leading-[75px] uppercase'>
                            Elevate your business with AI
                            Auto&apos;s proven impact
                        </h2>
                        <p className='font-cervino text-base leading-7 text-[#666666]'>
                            Join the league of forward-thinking businesses that have experienced a remarkable transformation
                            through AI Auto&apos;s AI automation solutions. Our commitment to innovation and excellence has
                            delivered tangible results that speak for themselves.
                        </p>
                    </div>

                    {/* Primary stat */}
                    <StatBlock stat={primaryStat} delay={150} />
                </div>

                {/* Secondary stats with staggered scroll animation */}
                <div className='grid gap-10 sm:grid-cols-2 lg:grid-cols-3'>
                    {secondaryStats.map((stat, index) => (
                        <StatBlock
                            key={stat.title}
                            stat={stat}
                            delay={200 + index * 150} // stagger on scroll
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FactsSection
