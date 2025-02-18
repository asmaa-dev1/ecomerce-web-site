import React from 'react';
import { Plus, Edit, Trash2, Search } from 'lucide-react';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Premium Headphones',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      price: 199.99,
      stock: 45,
      category: 'sport'
    },
    {
      id: 2,
      name: 'Smart Watch',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      price: 299.99,
      stock: 12,
      category: 'electronique'
    },
    {
      id: 3,
      name: 'Wireless Speaker',
      image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      price: 159.99,
      stock: 0,
      category: 'clothes'
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold dark:text-white">Products</h1>
        <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 
                         transition-colors duration-200 flex items-center">
          <Plus className="h-5 w-5 mr-2" />
          Add Product
        </button>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="h-5 w-5 text-gray-400" />
              </span>
              <input
                type="text"
                placeholder="Search products..."
                className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                         focus:outline-none focus:border-orange-500 dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div className="flex space-x-2">
              <select className="border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 
                              focus:outline-none focus:border-orange-500 dark:bg-gray-700 dark:text-white">
                <option>All Categories</option>
                <option>Electronics</option>
                <option>Accessories</option>
              </select>
              <select className="border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 
                              focus:outline-none focus:border-orange-500 dark:bg-gray-700 dark:text-white">
                <option>All category</option>
                <option>sport</option>
                <option>electronique</option>
                <option>clothes</option>
              </select>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Product
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Stock
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <img
                        className="h-10 w-10 rounded-lg object-cover"
                        src={product.image}
                        alt={product.name}
                      />
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                          {product.name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 dark:text-white">
                      ${product.price}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 dark:text-white">
                      {product.stock}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                      ${product.category === 'sport' 
                        ? 'bg-green-100 text-green-800'
                        : product.category === 'electronique'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                      }`}>
                      {product.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-indigo-600 hover:text-indigo-900 mr-4">
                      <Edit className="h-5 w-5" />
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      <Trash2 className="h-5 w-5" />
                    </button>
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

export default Products;