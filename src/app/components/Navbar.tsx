// components/Navbar.jsx
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo o nombre del sitio */}
        <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-gray-700">
          Mi App
        </Link>
        
        {/* Enlaces de Autenticación */}
        <div className="flex items-center space-x-4">
          <Link href="/auth/login" className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Login
          </Link>
          <Link href="/auth/register" className="px-4 py-2 text-sm font-medium text-blue-500 border border-blue-500 rounded-md hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;