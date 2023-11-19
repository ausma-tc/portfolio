import localFont from "@next/font/local";

const amphora = localFont({
  src: [
    {
      path: "../../../public/fonts/Amphora-Regular.otf",
    },
  ],
  variable: "--font-amphora",
});

const switzer = localFont({
  src: [
    {
      path: '../../../public/fonts/Switzer-Variable.ttf',
    }
  ],
  variable: '--font-switzer'
});

const HeroSection = () => {
  return (
    <section className={`${amphora.variable} font-amphora px-6 md:px-20`}>
      <h2>
        Thomas <br />
        <span className={`${switzer.variable} font-switzer`}>Corbières</span>
      </h2>
    </section>
  );
};

export default HeroSection;
