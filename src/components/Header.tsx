import React from 'react';
import { Link } from 'react-router-dom';
import { Pen } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-800 flex items-center">
          <Pen className="mr-2" />
          BlogMaster
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="text-gray-600 hover:text-gray-800">Home</Link></li>
            <li><Link to="/create" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Create Post</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;