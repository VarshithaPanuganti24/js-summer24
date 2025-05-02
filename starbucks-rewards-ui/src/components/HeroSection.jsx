const HeroSection = () => {
  return (
    <section className="w-full  bg-amber-50 flex flex-col md:flex-row items-center justify-between px-0 py-0">
      {/* Text Content */}
      <div className="md:w-1/2 mb-10 md:mb-0 text-left py-2 px-4 md:px-16  flex-col justify-center ">
        <h1 className="text-green-900 text-2xl md:text-3xl font-bold mb-6 leading-tight">
          It's a great day for <br />
          free coffee
        </h1>
        <p className="text-green-800 text-md mb-6">
          Sign up and start enjoying the perks of Startbuks Rewards
        </p>
        <button className="bg-green-800 text-black  font-semibold  py-2 px-4 rounded-full hover:bg-green-800 transition inline-flex items-center justify-center">
          Join now
        </button>
        <p className="text-green-900 text-md mb-6 ">
          It's even better with the app
        </p>
      </div>

      {/* Image Content */}
      <div className="md:w-1/2  h-full ">
        <img
          src="/rewards-hero.png"
          alt="Starbucks Hero"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;
