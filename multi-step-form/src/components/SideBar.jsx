import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = ({step}) => {
    return (
        <div className="w-1/4 img= text-white p-6 min-h-screen">
          <ul className="space-y-4">
            {[1, 2, 3, 4].map((num) => (
              <li key={num}>
                <Link
                  to={`/step${num}`}
                  className={`flex items-center p-3 rounded-lg ${
                    step === num ? "bg-white text-blue-600 font-bold" : ""
                  }`}
                >
                  <span className="mr-2">{num}</span> 
                  {`Step ${num}`}
                </Link>
              </li>
            ))}
          </ul>
        </div>
    );
};

export default SideBar