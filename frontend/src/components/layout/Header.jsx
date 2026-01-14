import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full">
              <span className="text-blue-600 font-bold text-xl">A</span>
            </div>
            <h1 className="text-white text-2xl font-bold tracking-tight">
              AlumniConnect
            </h1>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/dashboard" 
              className="text-white hover:text-blue-200 font-medium px-3 py-2 rounded-md text-sm transition-colors duration-200"
            >
              Dashboard
            </Link>
            <Link 
              to="/network" 
              className="text-white hover:text-blue-200 font-medium px-3 py-2 rounded-md text-sm transition-colors duration-200"
            >
              Network
            </Link>
            <Link 
              to="/events" 
              className="text-white hover:text-blue-200 font-medium px-3 py-2 rounded-md text-sm transition-colors duration-200"
            >
              Events
            </Link>
            <Link 
              to="/jobs" 
              className="text-white hover:text-blue-200 font-medium px-3 py-2 rounded-md text-sm transition-colors duration-200"
            >
              Jobs
            </Link>
            <Link 
              to="/mentorship" 
              className="text-white hover:text-blue-200 font-medium px-3 py-2 rounded-md text-sm transition-colors duration-200"
            >
              Mentorship
            </Link>
          </nav>

          {/* User Profile Section */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center shadow-md">
                <span className="font-semibold text-gray-700">JD</span>
              </div>
              <div className="hidden md:block">
                <p className="text-white font-medium">John Doe</p>
                <p className="text-blue-200 text-xs">alumni</p>
              </div>
            </div>
            
            <button 
              className="ml-4 bg-white text-blue-600 hover:bg-gray-100 px-4 py-2 rounded-lg font-medium text-sm transition-colors duration-200 shadow-md"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;