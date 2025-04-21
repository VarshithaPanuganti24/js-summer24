import React from "react";
import Header from "./Header";
import Results from "./Results";

const Home = () => {
  return (
    <div className="flex  flex-col font-light font-nunito bg-background-light-gray text-dark-grey  dark:bg-background-dark-mode dark:text-white  min-h-screen transition-colors duration-300 ">
      <Header />
      <Results />
    </div>
  );
};

export default Home;
