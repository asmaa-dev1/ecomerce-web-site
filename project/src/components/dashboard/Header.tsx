import React from 'react';
import { Bell, Search, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  toggleSidebar: () => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar, isDarkMode, toggleTheme }) => {
  return (
    <header className="h-16 bg-white dark:bg-gray-800 shadow-sm z-20">
      <div className="h-full px-6 flex items-center justify-between">
        <div className="flex items-center flex-1">
          <div className="relative w-64">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-5 w-5 text-gray-400" />
            </span>
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                       focus:outline-none focus:border-orange-500 dark:bg-gray-700 dark:text-white"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          
          <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
            <Bell className="h-5 w-5" />
          </button>

          <div className="flex items-center">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="User avatar"
              className="h-8 w-8 rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;