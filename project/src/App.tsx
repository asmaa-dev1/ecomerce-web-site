import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Users, 
  Bell, 
  Search,
  Menu,
  X,
  Sun,
  Moon
} from 'lucide-react';
import Sidebar from './components/dashboard/Sidebar';
import Header from './components/dashboard/Header';
import Dashboard from './components/dashboard/Dashboard';
import Products from './components/dashboard/Products';
import Orders from './components/dashboard/Orders';
import UsersComponent from './components/dashboard/Users';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const renderContent = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'products':
        return <Products />;
      case 'orders':
        return <Orders />;
      case 'users':
        return <UsersComponent />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className={`flex h-screen ${isDarkMode ? 'dark' : ''}`}>
      <Sidebar 
        isOpen={sidebarOpen} 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        toggleSidebar={toggleSidebar}
      />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header 
          toggleSidebar={toggleSidebar}
          isDarkMode={isDarkMode}
          toggleTheme={toggleTheme}
        />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-gray-900">
          <div className="container mx-auto px-6 py-8">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;