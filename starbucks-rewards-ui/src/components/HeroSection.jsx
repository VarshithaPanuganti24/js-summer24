const HeroSection = () => {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between px-0 py-0"
    style={{backgroundColor:'var(--sand)'}}>
      {/* Text Content */}
      <div className="md:w-1/2 mb-10 md:mb-0 text-left py-2 px-4 md:px-16  flex-col justify-center ">
        <h1 className=" text-3xl md:text-5xl font-bold mb-6 leading-tight"
        style={{color:'var(--textgreenheader)'}}>
          It's a great day for <br />
          free coffee
        </h1>
        <p className=" text-md mb-6"
        style={{color:'var(--textgreenh2)'}}>
          Sign up and start enjoying the perks of Startbuks Rewards
        </p>
        <button className=" text-white  font-bold py-2 px-4 rounded-full hover:bg-green-800 transition inline-flex items-center justify-center"
        style={{backgroundColor:'var(--bggreen)'}}>
          Join now
        </button>
        <p className="text-black text-md mb-6 pt-7 ">
          It's even better <span className="underline"> with the app.</span>
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
