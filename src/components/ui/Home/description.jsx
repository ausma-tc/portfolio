"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Link from "next/link";

// animations

const Description = () => {
  const target = useRef(null);

  useEffect(() => {
    if (target.current) {
      gsap.registerPlugin(ScrollTrigger);

      const text = new SplitType(target.current);

      gsap.from(text.chars, {
        scrollTrigger: {
          trigger: text.chars,
          start: "top 60%",
          end: "top 20%",
          scrub: true,
          markers: false,
        },
        opacity: 0.2,
        stagger: 0.1,
      });
    }
  }, [target]);

  return (
    <section className="py-20 px-6 md:px-20 relative" id="description-section">
      <div className="container">
        <p
          ref={target}
          className="font-amphora text-4xl leading-[54px] text-center pb-12"
        >
          I have always wanted to create new things, creativity and
          self-improvement are deeply ingrained in me. Venturing into web
          development has changed a lot for me, and since then, I try to push my
          work towards new horizons with every project, always prioritizing
          quality.
        </p>
        <div className="font-amphora flex w-full justify-center">
          <Link href="/about">En savoir plus</Link>
        </div>
      </div>
    </section>
  );
};

export default Description;
