import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-zinc-800 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold text-lg">Sidepanel Chrome Extension</div>
          <ul className="flex space-x-4">
            <li>
              <Link className="text-white hover:text-gray-400" to="/*">Main</Link>
            </li>
            <li>
              <Link className="text-white hover:text-gray-400" to="/tabone">Tab 1</Link>
            </li>
            <li>
              <Link className="text-white hover:text-gray-400" to="/tabtwo">Tab 2</Link>
            </li>
            <li>
              <Link className="text-white hover:text-gray-400" to="/tabthree">Tab 3</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
