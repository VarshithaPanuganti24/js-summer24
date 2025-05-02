import React from "react";
import Navbar from "../components/Navbar";
import RewardsBanner from "../components/RewardsBanner";
import HeroSection from "../components/HeroSection";
import GettingStartedSection from "../components/GettingStartedSection";
import GetYourFavroites from "../components/GetYourFavroites";

const Home = () => {
  return (
    <div className="w-full ">
      <Navbar />
      <main>
        <RewardsBanner />
        <HeroSection />
        <GettingStartedSection />
        <GetYourFavroites />
      </main>
    </div>
  );
};

export default Home;
