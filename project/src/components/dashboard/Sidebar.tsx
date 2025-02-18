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
    <div 
      className={`${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } fixed lg:relative lg:translate-x-0 z-30 h-screen bg-black transition-transform duration-300 ease-in-out`}
    >
      <div className="flex flex-col h-full w-64">
        <div className="flex items-center justify-between h-16 px-4 bg-black text-white">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            AdminPro
          </h1>
          <button 
            onClick={toggleSidebar}
            className="lg:hidden text-white hover:text-orange-500 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <nav className="flex-1 px-4 py-4">
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
              <Icon size={20} />
              <span className="ml-4">{label}</span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;