const Results = ({ countries }) => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {countries.map((country, idx) => (
          <div
            key={idx}
            tabIndex={0}
            className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow hover:shadow-lg transition"
          >
            <div className="mb-4">
              <img
                src={country.flag}
                alt={`Country Flag For ${country.name}`}
                className="w-full h-40 object-cover rounded-md"
              />
            </div>
            <p className="font-bold text-lg">{country.name}</p>
            <p>Population: {country.population.toLocaleString()}</p>
            <p>Region: {country.region}</p>
            <p>Capital: {country.capital}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default Results;
  