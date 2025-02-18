import React from 'react';
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  X,
  Menu
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  currentPage: string;
  setCurrentPage: (page: string) => void;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  currentPage,
  setCurrentPage,
  toggleSidebar
}) => {
  const menuItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'products', icon: Package, label: 'Products' },
    { id: 'orders', icon: ShoppingCart, label: 'Orders' },
    { id: 'users', icon: Users, label: 'Users' },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 lg:hidden z-40"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-64 bg-gray-900 z-50
          transform transition-transform duration-300 ease-in-out
          lg:translate-x-0 lg:static lg:h-screen
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <h1 className="text-xl font-bold text-white">AdminPro</h1>
          <button 
            onClick={toggleSidebar}
            className="p-1 rounded-lg hover:bg-gray-800 lg:hidden"
          >
            <X className="h-6 w-6 text-white" />
          </button>
        </div>

        <nav className="p-4">
          {menuItems.map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => setCurrentPage(id)}
              className={`
                w-full flex items-center px-4 py-3 mb-2 text-white rounded-lg
                transition-colors duration-200
                ${currentPage === id
                  ? 'bg-orange-500'
                  : 'hover:bg-orange-500/20'
                }
              `}
            >
              <Icon className="h-5 w-5 mr-3" />
              <span>{label}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Mobile Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="fixed bottom-4 right-4 p-3 bg-orange-500 rounded-full shadow-lg lg:hidden z-50"
      >
        <Menu className="h-6 w-6 text-white" />
      </button>
    </>
  );
};

export default Sidebar;