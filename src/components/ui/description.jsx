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
          J'ai toujours eu envie de créer de nouvelles choses, la créativité et
          le dépassement de soi sont quelque chose d’ancré en moi. Me lancer
          dans le développement web a changé beaucoup de choses, et depuis,
          j'essaie de pousser mon travail vers de nouveaux horizons à chaque
          projet, en privilégiant toujours la qualité.
        </p>
        <div className="font-amphora flex w-full justify-center">
          <Link href="/about">En savoir plus</Link>
        </div>
      </div>
    </section>
  );
};

export default Description;
