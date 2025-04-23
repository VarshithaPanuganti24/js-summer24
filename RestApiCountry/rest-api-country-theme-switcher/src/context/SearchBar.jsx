
const SearchBar = ({ setSearchQuery }) => {
    return (
      <div className="flex items-center gap-2 w-full sm:w-1/2 bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg shadow-sm">
        <img
          src="/magnifying-glass-solid.svg"
          alt="Search icon"
          className="w-5 h-5 opacity-60 dark:invert"
        />
        <input
          type="text"
          placeholder="Search for a country..."
          aria-label="Search for a country"
          onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
          className="w-full bg-transparent outline-none text-sm text-gray-700 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400"
        />
      </div>
    );
  };
  
  export default SearchBar;
  