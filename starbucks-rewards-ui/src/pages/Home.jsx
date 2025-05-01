import React from "react";
import Navbar from "../components/Navbar";
import RewardsBanner from "../components/RewardsBanner";
import HeroSection from "../components/HeroSection";
const Home = () => {
  return (
    <div className="w-full ">
      <Navbar />
      <main>
      <RewardsBanner />
      <HeroSection />
      </main>
      
    </div>
  );
};

export default Home;
