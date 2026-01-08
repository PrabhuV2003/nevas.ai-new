import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const SmoothScroll = ({ children }) => {
  const viewportRef = useRef(null);
  const fakeRef = useRef(null);
  const resizeObserverRef = useRef(null);

  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const viewport = viewportRef.current;

    // ResizeObserver to track content height
    resizeObserverRef.current = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setHeight(entry.contentRect.height);
      }
    });

    resizeObserverRef.current.observe(viewport);

    const onScroll = () => {
      gsap.to(viewport, {
        y: -window.pageYOffset,
        duration: 1,
        ease: "power4.out",
      });
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      resizeObserverRef.current?.disconnect();
    };
  }, []);

  return (
    <>
      <div className="viewport" ref={viewportRef}>
        {children}
      </div>

      {/* Fake spacer */}
      <div ref={fakeRef} style={{ height }} />
    </>
  );
};

export default SmoothScroll;
