import React from 'react';
import { Download, Filter } from 'lucide-react';

const Orders = () => {
  const orders = [
    {
      id: '#ORD-001',
      customer: 'John Doe',
      date: '2024-03-10',
      status: 'Completed',
      amount: 299.99
    },
    {
      id: '#ORD-002',
      customer: 'Jane Smith',
      date: '2024-03-09',
      status: 'Processing',
      amount: 159.99
    },
    {
      id: '#ORD-003',
      customer: 'Mike Johnson',
      date: '2024-03-08',
      status: 'Pending',
      amount: 499.99
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold dark:text-white">Orders</h1>
        <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 
                         transition-colors duration-200 flex items-center">
          <Download className="h-5 w-5 mr-2" />
          Export
        </button>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <select className="border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 
                              focus:outline-none focus:border-orange-500 dark:bg-gray-700 dark:text-white">
                <option>All Status</option>
                <option>Completed</option>
                <option>Processing</option>
                <option>Pending</option>
              </select>
              <input
                type="date"
                className="border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 
                         focus:outline-none focus:border-orange-500 dark:bg-gray-700 dark:text-white"
              />
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Order ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      {order.id}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 dark:text-white">
                      {order.customer}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 dark:text-white">
                      {order.date}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                      ${order.status === 'Completed'
                        ? 'bg-green-100 text-green-800'
                        : order.status === 'Processing'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-yellow-100 text-yellow-800'
                      }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    ${order.amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Showing 1 to 3 of 3 entries
            </div>
            <div className="flex space-x-2">
              <button className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-lg 
                              hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-white">
                Previous
              </button>
              <button className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-lg 
                              hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-white">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;