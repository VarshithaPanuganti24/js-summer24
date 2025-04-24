import React from "react";
import Header from "./Header";
import SearchBar from "../components/SearchBar";
import RegionFilter from "../components/RegionFilter";
import Results from "../components/Results";
import { useState, useEffect,useMemo } from "react";
import { useTheme } from "../context/ThemeContext";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [region, setRegion] = useState("");
  const { theme } = useTheme();

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.map((c) => ({
          name: c.name.common,
          flag: c.flags.svg,
          population: c.population,
          region: c.region,
          capital: c.capital?.[0] || "N/A",
        }));
        setCountries(formatted);
      });
  }, []);

  const filteredCountries = useMemo(() => {
    return countries.filter((country) => {
      const matchesSearch = country.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesRegion = region ? country.region === region : true;
      return matchesSearch && matchesRegion;
    });
  }, [countries, searchQuery, region]);

  const getBackgroundColor = () => (theme === "light" ? "#ffffff" : "#111827"); // Tailwind white / gray-900
  const getTextColor = () => (theme === "light" ? "#1f2937" : "#ffffff"); 

  return (
    

    <div className="min-h-screen transition-colors duration-300"
    style={{ backgroundColor: getBackgroundColor(), color: getTextColor() }}
    >
      {/* Header */}
      <Header />

      <main className="p-10 space-y-6">
        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 m-[5px]"
        style={{ backgroundColor: getBackgroundColor(), color: getTextColor() }}>

          <SearchBar setSearchQuery={setSearchQuery} />
          <RegionFilter setRegion={setRegion} />
        </div>

        {/* Results */}
        <Results countries={filteredCountries} />
      </main>
    </div>
  );
};

export default Home;
