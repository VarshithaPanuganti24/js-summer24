const HeroSection = () => {
    return (
      <section className="w-full flex flex-col md:flex-row items-center justify-between px-0 py-0">
        {/* Text Content */}
        <div className="md:w-1/2 mb-10 md:mb-0 text-left  bg-green-100 py-4 px-4 md:px-16 flex flex-col justify-center ">
          <h1 className="text-green-900 text-4xl md:text-5xl font-bold mb-6 leading-tight">
            It's a great day for <br />free coffee
          </h1>
          <p className="text-green-800 text-lg mb-6">
            Sign up and start enjoying the perks of Startbuks Rewards
          </p>
          <button className="bg-green-700 text-black items-center px-6 font-semibold  py-3 rounded-full hover:bg-green-800 transition">
            Join now
          </button>
          <p className="text-green-800 text-lg mb-6 py-2">
            It's even better with the app
          </p>
        </div>
  
        {/* Image Content */}
        <div className="md:w-1/2  h-full  py-0 ">
          <img
            src="/rewards-hero.png"
            alt="Starbucks Hero"
            className="w-full h-full object-contain"
          />
        </div>
      </section>
    );
  };
  
  export default HeroSection;
  