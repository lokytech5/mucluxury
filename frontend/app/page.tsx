
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Hero Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">Welcome, Admin</h1>
          <p className="py-4 text-gray-600">Manage your e-commerce site effectively from here.</p>
        </div>
      </div>

      {/* Dashboard Metrics Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-xl font-semibold text-gray-800">Total Sales</h2>
          <p className="text-3xl font-bold text-green-500">$12,345</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-xl font-semibold text-gray-800">New Orders</h2>
          <p className="text-3xl font-bold text-blue-500">123</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-xl font-semibold text-gray-800">New Customers</h2>
          <p className="text-3xl font-bold text-purple-500">45</p>
        </div>
      </div>

      {/* Recent Activities Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Recent Activities</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>Order #12345 placed by John Doe</li>
          <li>Product "New Arrival" added to the catalog</li>
          <li>User "Jane Smith" registered</li>
        </ul>
      </div>

      {/* Quick Links Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-xl font-semibold text-gray-800">Manage Products</h2>
          <button className="btn btn-primary mt-4">Go to Products</button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-xl font-semibold text-gray-800">View Orders</h2>
          <button className="btn btn-primary mt-4">Go to Orders</button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-xl font-semibold text-gray-800">Customer Support</h2>
          <button className="btn btn-primary mt-4">Go to Support</button>
        </div>
      </div>
    </div>
  );
}
