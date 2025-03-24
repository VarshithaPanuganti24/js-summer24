import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { setSearchQuery,clearSearchQuery } from '../redux/searchSlice';

const SearchBar = () => {

  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleSearch =(e) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);
    dispatch(setSearchQuery(value));

  };

  return (
    <input
    type='text'
    placeholder='Search Products'
    value={query}
    onChange={handleSearch}
    className='w-full p-2 border rounded-md focus:ring focus-ring-blue-400'
    />
  )
}

export default SearchBar



// const SearchBar = ({searchQuery,setSearchQuery}) => {

//   const handleSearch =(e) => {
//     const value = e.target.value.toLowerCase();
//     setSearchQuery(value);

//   };

//   return (
//     <input
//     type='text'
//     placeholder='Search Products'
//     value={searchQuery}
//     onChange={handleSearch}
//     className='w-full p-2 border rounded-md focus:ring focus-ring-blue-400'
//     />
//   )
// }

// export default SearchBar










