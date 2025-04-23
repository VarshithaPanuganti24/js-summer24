const RegionFilter = ({ setRegion }) => {
    return (
      <div className="w-full sm:w-1/3">
        <select
          onChange={(e) => setRegion(e.target.value)}
          aria-label="Filter countries by region"
          className="w-full px-4 py-2 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg shadow-sm focus:outline-none"
        >
          <option value="">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    );
  };
  
  export default RegionFilter;
  