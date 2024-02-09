const HeroSection = () => {
  return (
    <section className="font-amphora py-20 md:py-32 px-6 md:px-20">
      <h1 className="uppercase text-[15vw] leading-[100%] min-w-[90%] pb-20">
        Thomas <br />
        <span className="font-switzer font-bold">Corbières</span>
      </h1>
      <div className="flex w-full justify-end">
        <p className="max-w-lg">
          Hey! Je m’appelle Thomas, développeur front-end de 28 ans.
          Actuellement basé à Montréal au Canada, mais vivant en France.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
