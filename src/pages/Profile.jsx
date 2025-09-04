import React, { useState } from 'react';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('profile');
  
  // Sample user data
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '+880 1712 345678',
    address: '123 Main Street, Dhaka, Bangladesh',
    joinDate: 'January 15, 2023'
  });

  // Sample order history
  const orderHistory = [
    {
      id: 'ORD-12345',
      date: '2023-10-15',
      items: 3,
      total: 2450,
      status: 'Delivered'
    },
    {
      id: 'ORD-12346',
      date: '2023-09-22',
      items: 2,
      total: 1200,
      status: 'Delivered'
    },
    {
      id: 'ORD-12347',
      date: '2023-11-05',
      items: 5,
      total: 3750,
      status: 'Processing'
    }
  ];

  // Sample cart history
  const cartHistory = [
    {
      id: 'CART-001',
      date: '2023-11-10',
      items: 4,
      total: 3100,
      status: 'Saved'
    },
    {
      id: 'CART-002',
      date: '2023-11-08',
      items: 2,
      total: 1500,
      status: 'Abandoned'
    },
    {
      id: 'CART-003',
      date: '2023-10-30',
      items: 3,
      total: 2200,
      status: 'Purchased'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">My Profile</h1>
      
      {/* Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="flex space-x-8">
          <button
            onClick={() => setActiveTab('profile')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'profile'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Personal Information
          </button>
          <button
            onClick={() => setActiveTab('orders')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'orders'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Order History
          </button>
          <button
            onClick={() => setActiveTab('carts')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'carts'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Cart History
          </button>
        </nav>
      </div>

      {/* Profile Information */}
      {activeTab === 'profile' && (
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Personal Information</h2>
          
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center">
              <label className="block text-sm font-medium text-gray-700 sm:w-32">Full Name</label>
              <div className="mt-1 sm:mt-0 sm:flex-1">
                <input
                  type="text"
                  value={userData.name}
                  onChange={(e) => setUserData({...userData, name: e.target.value})}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                />
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center">
              <label className="block text-sm font-medium text-gray-700 sm:w-32">Email</label>
              <div className="mt-1 sm:mt-0 sm:flex-1">
                <input
                  type="email"
                  value={userData.email}
                  onChange={(e) => setUserData({...userData, email: e.target.value})}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                />
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center">
              <label className="block text-sm font-medium text-gray-700 sm:w-32">Phone</label>
              <div className="mt-1 sm:mt-0 sm:flex-1">
                <input
                  type="tel"
                  value={userData.phone}
                  onChange={(e) => setUserData({...userData, phone: e.target.value})}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                />
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-start">
              <label className="block text-sm font-medium text-gray-700 sm:w-32">Address</label>
              <div className="mt-1 sm:mt-0 sm:flex-1">
                <textarea
                  value={userData.address}
                  onChange={(e) => setUserData({...userData, address: e.target.value})}
                  rows={3}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                />
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center">
              <label className="block text-sm font-medium text-gray-700 sm:w-32">Member Since</label>
              <div className="mt-1 sm:mt-0 sm:flex-1">
                <p className="text-sm text-gray-900 p-2">{userData.joinDate}</p>
              </div>
            </div>
            
            <div className="pt-4">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Order History */}
      {activeTab === 'orders' && (
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <h2 className="text-xl font-semibold text-gray-800 p-6 border-b">Order History</h2>
          
          <div className="divide-y divide-gray-200">
            {orderHistory.length > 0 ? (
              orderHistory.map((order) => (
                <div key={order.id} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="mb-4 md:mb-0">
                      <p className="font-medium text-gray-900">Order #{order.id}</p>
                      <p className="text-sm text-gray-500">Placed on {order.date}</p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:space-x-6">
                      <div className="mb-2 sm:mb-0">
                        <p className="text-sm text-gray-500">Items</p>
                        <p className="font-medium">{order.items}</p>
                      </div>
                      
                      <div className="mb-2 sm:mb-0">
                        <p className="text-sm text-gray-500">Total</p>
                        <p className="font-medium">Tk {order.total.toLocaleString()}</p>
                      </div>
                      
                      <div>
                        <p className="text-sm text-gray-500">Status</p>
                        <p className={`font-medium ${
                          order.status === 'Delivered' ? 'text-green-600' : 
                          order.status === 'Processing' ? 'text-yellow-600' : 'text-gray-600'
                        }`}>
                          {order.status}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <button
                      type="button"
                      className="text-sm font-medium text-blue-600 hover:text-blue-500"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-6 text-center">
                <p className="text-gray-500">You haven't placed any orders yet.</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Cart History */}
      {activeTab === 'carts' && (
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <h2 className="text-xl font-semibold text-gray-800 p-6 border-b">Cart History</h2>
          
          <div className="divide-y divide-gray-200">
            {cartHistory.length > 0 ? (
              cartHistory.map((cart) => (
                <div key={cart.id} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="mb-4 md:mb-0">
                      <p className="font-medium text-gray-900">Cart #{cart.id}</p>
                      <p className="text-sm text-gray-500">Last updated: {cart.date}</p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:space-x-6">
                      <div className="mb-2 sm:mb-0">
                        <p className="text-sm text-gray-500">Items</p>
                        <p className="font-medium">{cart.items}</p>
                      </div>
                      
                      <div className="mb-2 sm:mb-0">
                        <p className="text-sm text-gray-500">Total</p>
                        <p className="font-medium">Tk {cart.total.toLocaleString()}</p>
                      </div>
                      
                      <div>
                        <p className="text-sm text-gray-500">Status</p>
                        <p className={`font-medium ${
                          cart.status === 'Purchased' ? 'text-green-600' : 
                          cart.status === 'Saved' ? 'text-blue-600' : 'text-gray-600'
                        }`}>
                          {cart.status}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex space-x-3">
                    {cart.status === 'Saved' && (
                      <button
                        type="button"
                        className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                      >
                        Continue Shopping
                      </button>
                    )}
                    <button
                      type="button"
                      className="text-sm font-medium text-blue-600 hover:text-blue-500"
                    >
                      View Cart
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-6 text-center">
                <p className="text-gray-500">Your cart history is empty.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;