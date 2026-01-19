import React from 'react';
const AlumniDashboard = () => {
  return (
    <div className="page-container">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Alumni Dashboard</h1>
      <p className="text-gray-600 mb-8">Welcome back! Here's your alumni network overview.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="card">
          <h2 className="text-xl font-semibold mb-2">Your Network</h2>
          <p className="text-3xl font-bold text-primary-600">248</p>
          <p className="text-sm text-gray-500">Total connections</p>
        </div>
        <div className="card">
          <h2 className="text-xl font-semibold mb-2">Mentees</h2>
          <p className="text-3xl font-bold text-green-600">8</p>
          <p className="text-sm text-gray-500">Active mentees</p>
        </div>
        <div className="card">
          <h2 className="text-xl font-semibold mb-2">Contributions</h2>
          <p className="text-3xl font-bold text-purple-600">₹1,25,000</p>
          <p className="text-sm text-gray-500">Total donations</p>
        </div>
      </div>
      
      <div className="card">
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="flex flex-wrap gap-4">
          <button className="btn-primary">Update Profile</button>
          <button className="btn-secondary">Find Mentees</button>
          <button className="btn-secondary">Post Job</button>
          <button className="btn-secondary">Create Event</button>
        </div>
      </div>
    </div>
  )
}

export default AlumniDashboard

