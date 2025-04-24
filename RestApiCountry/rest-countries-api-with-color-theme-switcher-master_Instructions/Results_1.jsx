import React from "react";
import { useState,useEffect } from "react";


const Results = () => {
  const [countries, setCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.map((c) => ({
          name: c.name.common,
          flag: c.flags.svg,
          population: c.population,
          region: c.region,
          capital: c.capital?.[0] || 'N/A',
        }));
        setCountries(formatted);
      });
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchQuery)
  );


  return (
    <>
      <div className="results">
      <div className="p-4 space-y-6">
      {/* Search Bar */}
      <SearchBar setSearchQuery={setSearchQuery} />

      {/* Filtered Results */}
      <Results countries={filteredCountries} />
    </div>
        {/* Countries */}

        <div className="countries grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {countries.map((country, idx) => (
            <div
              key={idx}
              tabIndex={0}
              className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow hover:shadow-lg transition"
              aria-label={`View details for ${country.name}`}
            >
              <div className="flag mb-4">
                <img
                  src={country.flag}
                  alt={`Country Flag For ${country.name}`}
                  className="w-full h-40 object-cover rounded-md"
                />
              </div>
              <p className="name font-bold text-lg">{country.name}</p>
              <p className="info">
                Population: {country.population.toLocaleString()}
              </p>
              <p className="info">Region: {country.region}</p>
              <p className="info">Capital: {country.capital}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Results;



const Results = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.map((country) => ({
          name: country.name.common,
          flag: country.flags.svg,
          population: country.population,
          region: country.region,
          capital: country.capital?.[0] || "N/A",
        }));
        setCountries(formatted);
      });
  }, []);

//   return (
//     <>
//       <div className="results">
//         {/* Search-filter-container */}
//         <div className="flex flex-col sm:flex-row  justify-between items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md ">
//           <div class="flex items-center gap-2 w-full sm:w-1/2 bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg shadow-sm">
//             <img
//               src="/magnifying-glass-solid.svg"
//               alt="Search icon"
//               class="w-5 h-5 opacity-60 dark:invert"
//             />
//             <input
//               type="text"
//               placeholder="Search for a country..."
//               aria-label="Search for a country"
//               class="w-full bg-transparent outline-none text-sm text-gray-700 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400"
//             />
//           </div>
//           {/* Filter */}
//           <div class="w-full sm:w-1/3">
//             <select
//               aria-label="Filter countries by region"
//               class="w-full px-4 py-2 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg shadow-sm focus:outline-none"
//             >
//               <option value="">Filter by Region</option>
//               <option value="Africa">Africa</option>
//               <option value="Americas">Americas</option>
//               <option value="Asia">Asia</option>
//               <option value="Europe">Europe</option>
//               <option value="Oceania">Oceania</option>
//             </select>
//           </div>
//         </div>
//         {/* Countries */}

//         <div className="countries grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
//           {countries.map((country, idx) => (
//             <div
//               key={idx}
//               tabIndex={0}
//               className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow hover:shadow-lg transition"
//               aria-label={`View details for ${country.name}`}
//             >
//               <div className="flag mb-4">
//                 <img
//                   src={country.flag}
//                   alt={`Country Flag For ${country.name}`}
//                   className="w-full h-40 object-cover rounded-md"
//                 />
//               </div>
//               <p className="name font-bold text-lg">{country.name}</p>
//               <p className="info">
//                 Population: {country.population.toLocaleString()}
//               </p>
//               <p className="info">Region: {country.region}</p>
//               <p className="info">Capital: {country.capital}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

export default Results;
