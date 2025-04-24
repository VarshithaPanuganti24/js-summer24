import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const CountryDetails = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
      .then(res => res.json())
      .then(data => setCountry(data[0]));
  }, [name]);

  if (!country) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded shadow"
      >
        <img src="/backward-solid.svg" alt="Back" className="w-4 h-4" />
        <p>  Back</p>
      </button>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <img
          src={country.flags.svg}
          alt={`${country.name.common} flag`}
          className="w-full max-h-[400px] object-cover rounded-lg"
        />

        <div className="space-y-4 text-gray-800 dark:text-white">
          <h2 className="text-2xl font-bold">{country.name.common}</h2>
          <p><strong>Native Name:</strong> {Object.values(country.name.nativeName || {})[0]?.common}</p>
          <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
          <p><strong>Region:</strong> {country.region}</p>
          <p><strong>Sub Region:</strong> {country.subregion || "Unknown"}</p>
          <p><strong>Capital:</strong> {country.capital?.[0] || "N/A"}</p>
          <p><strong>Top Level Domain:</strong> {country.tld?.join(", ")}</p>
          <p><strong>Currencies:</strong> {Object.values(country.currencies || {}).map(cur => cur.name).join(", ")}</p>
          <p><strong>Languages:</strong> {Object.values(country.languages || {}).join(", ")}</p>

          {country.borders?.length > 0 && (
            <div>
              <p><strong>Border Countries:</strong></p>
              <div className="flex flex-wrap gap-2 mt-1">
                {country.borders.map((border, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gray-200 dark:bg-gray-600 text-sm rounded shadow"
                  >
                    {border}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
