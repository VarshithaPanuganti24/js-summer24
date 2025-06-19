import React from 'react'

import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 ">
      <div className="w-full px-6  flex justify-between">
        <h1 className="text-lg font-bold">My Portfolio</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/projects" className="hover:underline">Projects</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;