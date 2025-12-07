'use client'

export default function DashboardPage() {
  const stats = [
    { label: 'Total Users', value: '1,234', change: '+12%', icon: '👥', color: 'bg-blue-500' },
    { label: 'Transactions', value: '5,678', change: '+8%', icon: '💳', color: 'bg-green-500' },
    { label: 'Revenue', value: '$45,678', change: '+15%', icon: '💰', color: 'bg-purple-500' },
    { label: 'Active Sessions', value: '234', change: '+5%', icon: '🔥', color: 'bg-orange-500' },
  ]

  const recentActivity = [
    { id: 1, user: 'John Doe', action: 'Created new account', time: '2 minutes ago' },
    { id: 2, user: 'Jane Smith', action: 'Updated profile', time: '15 minutes ago' },
    { id: 3, user: 'Bob Johnson', action: 'Completed transaction', time: '1 hour ago' },
    { id: 4, user: 'Alice Brown', action: 'Changed password', time: '2 hours ago' },
    { id: 5, user: 'Charlie Wilson', action: 'Uploaded document', time: '3 hours ago' },
  ]

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Welcome to Mosaic Admin Console</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center text-2xl`}>
                {stat.icon}
              </div>
              <span className="text-sm font-semibold text-green-600">{stat.change}</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
            <p className="text-sm text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">Recent Activity</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {recentActivity.map((activity) => (
            <div key={activity.id} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold">
                    {activity.user.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{activity.user}</p>
                    <p className="text-sm text-gray-600">{activity.action}</p>
                  </div>
                </div>
                <span className="text-sm text-gray-500">{activity.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
