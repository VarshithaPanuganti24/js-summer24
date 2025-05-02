import React, { useState } from "react";

const rewards = [
  {
    stars: 25,
    title: "Customize your drink",
    description:
      "Make your drink just right with an extra espresso shot or a dash of your favorite syrup.",
    image: "/25.png",
  },
  {
    stars: 100,
    title: "Brewed coffee, bakery item & more",
    description:
      "Treat yourself to an iced coffee, buttery croissant, bag of chips and more.",
    image: "/100.png",
  },
  {
    stars: 200,
    title: "Handcrafted drink or hot breakfast",
    description:
      "Turn good mornings great with a handcrafted drink, breakfast sandwich or oatmeal.",
    image: "/200.png",
  },
  {
    stars: 300,
    title: "Sandwich, protein box or at-home coffee",
    description:
      "Enjoy a PM pick-me-up with a lunch sandwich, protein box or Starbucks VIA Instant®.",
    image: "/300.png",
  },
  {
    stars: 400,
    title: "Select Starbucks® merchandise",
    description: "Take home a signature cup, drink tumbler or merch up to $20.",
    image: "/400.png",
  },
];

export default function GetYourFavorites() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-5 md:py-9 text-center">
      <div className="pt-7 " style={{ backgroundColor: "var(--bggyf)" }}>
        <h2
          className="text-lg font-semibold pb-3 md:pb-7 "
          tabIndex="-1"
        >
          Get your favorites for free
        </h2>

        {/* Tab List */}
        <div
          className="flex justify-center "
          role="tablist"
          aria-label="Reward levels"
        >
          {rewards.map((reward, index) => (
            <button
              key={index}
              role="tab"
              aria-selected={activeTab === index}
              onClick={() => setActiveTab(index)}
              className={` pt-2 pb-3 flex text-md font-semibold relative ${
                activeTab === index ? "border-b-2 border-green-900" : ""
              }`}
            >
              {reward.stars}
              <span aria-hidden="true" className="text-xs pt-1 text-yellow-500">
                ★
              </span>
              <span className="sr-only">Stars</span>
            </button>
          ))}
        </div>

        {/* Active Tab Panel */}
        <div className="py-3 px-3" 
        style={{backgroundColor:'var(--bggyfimg)'}}>
          <div className="md:flex justify-center items-center">
            <div className="md:mr-7 md:w-1/2 relative mb-6 md:mb-0">
              <div className="pb-[56.25%] relative w-full">
                <img
                  src={rewards[activeTab].image}
                  alt={rewards[activeTab].title}
                  className="absolute top-0 left-0 w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-md font-semibold pb-3" tabIndex="-1">
                {rewards[activeTab].title}
              </h3>
              <p className="text-center md:text-left">
                {rewards[activeTab].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
