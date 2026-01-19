import React from 'react'

const StudentDashboard = () => {
  return (
    <div className="page-container">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Student Dashboard</h1>
      <p className="text-gray-600 mb-8">Welcome! Here are opportunities for you.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="card">
          <h2 className="text-xl font-semibold mb-2">Active Mentors</h2>
          <p className="text-3xl font-bold text-primary-600">3</p>
          <p className="text-sm text-gray-500">Guiding you</p>
        </div>
        <div className="card">
          <h2 className="text-xl font-semibold mb-2">Internships</h2>
          <p className="text-3xl font-bold text-green-600">12</p>
          <p className="text-sm text-gray-500">Available opportunities</p>
        </div>
        <div className="card">
          <h2 className="text-xl font-semibold mb-2">Events</h2>
          <p className="text-3xl font-bold text-purple-600">5</p>
          <p className="text-sm text-gray-500">Upcoming events</p>
        </div>
      </div>
      
      <div className="card">
        <h2 className="text-xl font-semibold mb-4">Featured Alumni</h2>
        <div className="space-y-4">
          <div className="flex items-center p-3 border rounded-lg">
            <div className="w-10 h-10 rounded-full bg-gray-200 mr-3"></div>
            <div>
              <h3 className="font-medium">Dr. Sarah Chen</h3>
              <p className="text-sm text-gray-500">Senior Engineer at Google</p>
            </div>
            <button className="ml-auto btn-secondary text-sm">Connect</button>
          </div>
          <div className="flex items-center p-3 border rounded-lg">
            <div className="w-10 h-10 rounded-full bg-gray-200 mr-3"></div>
            <div>
              <h3 className="font-medium">Michael Rodriguez</h3>
              <p className="text-sm text-gray-500">Product Manager at Microsoft</p>
            </div>
            <button className="ml-auto btn-secondary text-sm">Connect</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentDashboard