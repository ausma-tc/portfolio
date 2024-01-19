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
    <section className={`${amphora.variable} font-amphora md:py-32 px-6 md:px-20`}>
      <h2 className="uppercase text-[15vw] leading-[100%] min-w-[90%] pb-20">
        Thomas <br />
        <span className={`${switzer.variable} font-switzer font-bold`}>Corbières</span>
      </h2>
      <div className="flex w-full justify-end">
        <p className="max-w-lg">Hey! Je m’appelle Thomas, développeur front-end de 28 ans. Actuellement basé à Montréal au Canada, mais vivant en France.</p>
      </div>
    </section>
  );
};

export default HeroSection;
