import { useEffect, useState } from 'react';

function CountryList() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => {
        const formattedData = data.map(country => ({
          name: country.name.common,
          flag: country.flags.svg,
          population: country.population,
          region: country.region,
          capital: country.capital?.[0] || 'N/A',
        }));
        setCountries(formattedData);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {countries.map((c, index) => (
        <div key={index} tabIndex={0} className="country-container bg-white dark:bg-gray-800 p-4 rounded-xl shadow hover:shadow-lg transition">
          <div className="flag mb-4">
            <img src={c.flag} alt={`Country Flag For ${c.name}`} className="w-full h-40 object-cover rounded-md" />
          </div>
          <p className="name font-bold text-lg">{c.name}</p>
          <p className="info">Population: {c.population.toLocaleString()}</p>
          <p className="info">Region: {c.region}</p>
          <p className="info">Capital: {c.capital}</p>
        </div>
      ))}
    </div>
  );
}
