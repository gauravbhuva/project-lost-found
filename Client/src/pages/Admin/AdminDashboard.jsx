import { FiUsers, FiClipboard, FiAlertTriangle } from 'react-icons/fi';

export default function AdminDashboard() {
  const stats = [
    { name: 'Total Users', stat: '1,204', icon: FiUsers },
    { name: 'Items Reported', stat: '783', icon: FiClipboard },
    { name: 'Open Reports', stat: '52', icon: FiAlertTriangle },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
      <p className="mt-2 text-gray-600">Welcome to the admin dashboard. Here you can manage users, items, and reports.</p>

      <div className="mt-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((item) => (
            <div key={item.name} className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <item.icon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">{item.name}</dt>
                      <dd className="text-3xl font-semibold text-gray-900">{item.stat}</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h2>
        {/* Placeholder for recent activity feed */}
        <p className="text-gray-500">Recent activity will be shown here.</p>
      </div>
    </div>
  );
}