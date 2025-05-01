import React from "react";

const Navbar = () => {
  return (
    <header className=" bg-white  shadow-sm w-full">
      <div className=" mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img
            src="https://www.starbucks.com/static/images/global/logo.svg"
            alt="Starbucks Logo"
            className="w-10 h-10"
          />
          <nav className="hidden md:flex space-x-6 text-sm font-semibold text-gray-700">
          <span className="hover:text-black cursor-default">Menu</span>
        <span className="hover:text-black cursor-default">Rewards</span>
        <span className="hover:text-black cursor-default">Gift Cards</span>
          </nav>
        </div>

        {/* Buttons */}
        <div className="flex items-center space-x-4">
          <button className="text-sm font-semibold hover:text-black">
            Sign in
          </button>
          <button className="text-sm font-semibold hover:text-black">
            Join now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;



//export default Navbar;

// <nav className=" fixed top-0 left-0 w-full bg-white shadow-sm px-6 py-4 flex items-center justify-between">
//       {/* Left: Logo */}
//       <div className="flex items-center space-x-4">
//         <img
//           src="https://www.starbucks.com/static/images/rewards/rewards-logo.svg"
//           alt="Starbucks Rewards"
//           className="h-6"
//         />
//       </div>

//       {/* Center: Links */}
//       <ul className="hidden md:flex space-x-8 text-sm font-semibold text-gray-700">
//         <li className="hover:text-green-600 cursor-pointer">Menu</li>
//         <li className="hover:text-green-600 cursor-pointer">Rewards</li>
//         <li className="hover:text-green-600 cursor-pointer">Gift cards</li>
//       </ul>

//       {/* Right: Auth Buttons */}
//       <div className="flex items-center space-x-4">
//         <button className="text-sm font-semibold text-gray-700 hover:text-green-600">
//           Sign in
//         </button>
//         <button className="bg-green-700 text-white text-sm font-semibold py-2 px-4 rounded-full hover:bg-green-800">
//           Join now
//         </button>
//       </div>
//     </nav>
