import React from "react";
import Image from "next/image";
import localFont from "@next/font/local";

const amphora = localFont({
  src: [
    {
      path: "../../public/fonts/Amphora-Regular.otf",
    },
  ],
  variable: "--font-amphora",
});

const switzer = localFont({
  src: [
    {
      path: "../../public/fonts/Switzer-Variable.ttf",
    },
  ],
  variable: "--font-switzer",
});

const About = () => {
  return (
    <main className="mainContent py-28 px-20">
      <section className="flex flex-col">
        <div className="flex pb-20">
          <h1
            className={`${amphora.variable} font-amphora text-[7.5rem] leading-none`}
          >
            À propos
          </h1>
        </div>
        <div className="flex items-start justify-between">
        <div className="wrapper-text max-w-[640px]">
          <p>
            Lorem ipsum dolor sit amet consectetur. Tellus tortor mauris commodo
            et faucibus velit id eget. Venenatis et tempus metus morbi gravida
            enim senectus justo elementum. Ipsum ipsum massa venenatis egestas
            gravida gravida rhoncus ipsum. Scelerisque id tempor quisque in
            molestie. Id pellentesque lorem nulla pulvinar integer feugiat.
          </p>
          <p>
            Felis id enim malesuada vitae sollicitudin rutrum bibendum ante
            porttitor. Nunc euismod tincidunt pulvinar cursus et tortor nibh ut.
            Sed sed sed sapien est. Tristique donec commodo dignissim fusce
            velit sapien etiam eget.
          </p>
        </div>
          <div className="wrapper-img max-w-[600px] overflow-hidden">
            <Image
              src="/images/Thomas_C_B&W_2023.png"
              width={600}
              height={1280}
              alt="Picture of the author"
              className="max-w-2xl"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
