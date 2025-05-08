import React from "react";
import Navbar from "../components/Navbar";
import RewardsBanner from "../components/RewardsBanner";
import HeroSection from "../components/HeroSection";
import GettingStartedSection from "../components/GettingStartedSection";
import GetYourFavroites from "../components/GetYourFavroites";
import EndlessExtra from "../components/EndlessExtra";
import WaysToPay from "../components/WaysToPay";
import KeepTheRewards from "../components/KeepTheRewards";
import Questions from "../components/Questions";
import TermsConditions from "../components/TermsConditions";
import FooterLinks from "../components/FooterLinks";

const Home = () => {
  return (
    <div className="w-full flex-flex-col ">
      <Navbar />
      <main>
        <RewardsBanner />
        <HeroSection />
        <GettingStartedSection />
        <GetYourFavroites />
        <EndlessExtra />
        <WaysToPay />
        <KeepTheRewards />
        <Questions />
        <TermsConditions />
        <FooterLinks />
      </main>
    </div>
  );
};

export default Home;
