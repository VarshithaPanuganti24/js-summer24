import React from "react";
import Header from "./Header";
import Results from "./Results";

const Home = () => {
  return (
    <div className="flex  flex-col font-light font-nunito bg-[hsl(var(--background-light-gray))] text-[hsl(var(--dark-gray))] dark:bg-[hsl(var(--background-dark-mode))] dark:text-[hsl(var(--white))]  min-h-screen transition-colors duration-300 ">
      <Header />

      {/* Results */}
      
      <Results />
    </div>
  );
};

export default Home;
