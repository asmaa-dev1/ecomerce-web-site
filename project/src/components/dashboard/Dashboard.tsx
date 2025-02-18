import React from 'react';
import { 
  TrendingUp, 
  Users, 
  ShoppingBag, 
  DollarSign,
  ArrowUp,
  ArrowDown
} from 'lucide-react';

const Dashboard = () => {
  const stats = [
    {
      title: 'Total Revenue',
      value: '$54,375',
      icon: DollarSign,
      change: '+14.5%',
      trend: 'up'
    },
    {
      title: 'Active Users',
      value: '2,345',
      icon: Users,
      change: '+7.2%',
      trend: 'up'
    },
    {
      title: 'New Orders',
      value: '345',
      icon: ShoppingBag,
      change: '-2.4%',
      trend: 'down'
    },
    {
      title: 'Growth Rate',
      value: '12.5%',
      icon: TrendingUp,
      change: '+3.1%',
      trend: 'up'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg p-6 text-white shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm opacity-80">{stat.title}</p>
                  <p className="text-2xl font-bold mt-1">{stat.value}</p>
                </div>
                <Icon className="h-8 w-8 opacity-80" />
              </div>
              <div className="flex items-center mt-4">
                {stat.trend === 'up' ? (
                  <ArrowUp className="h-4 w-4 mr-1" />
                ) : (
                  <ArrowDown className="h-4 w-4 mr-1" />
                )}
                <span className={`text-sm ${
                  stat.trend === 'up' ? 'text-green-100' : 'text-red-100'
                }`}>
                  {stat.change}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 dark:text-white">Recent Activity</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((_, index) => (
              <div 
                key={index}
                className="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
              >
                <div className="flex-1 dark:text-white">
                  <p className="font-medium">New order #1234</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">2 minutes ago</p>
                </div>
                <span className="px-3 py-1 text-sm bg-green-100 text-green-800 rounded-full">
                  Completed
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 dark:text-white">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            {['Add Product', 'New Order', 'Add User', 'Export Data'].map((action, index) => (
              <button
                key={index}
                className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg text-center hover:bg-orange-500 
                         hover:text-white transition-colors duration-200 dark:text-white"
              >
                {action}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;