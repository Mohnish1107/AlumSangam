import React,{useState} from 'react'
import {useNavigate, Link } from 'react-router-dom'
const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'alumni'
  })
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      console.log('Login attempt:', formData)
      // Navigate based on role
      if (formData.role === 'alumni') {
        navigate('/dashboard')
      } else if (formData.role === 'student') {
        navigate('/dashboard')
      } else {
        navigate('/dashboard')
      }
      setLoading(false)
    }, 1000)
  }

  const roleOptions = [
    { value: 'student', label: 'Student' },
    { value: 'alumni', label: 'Alumni' },
    { value: 'admin', label: 'Administrator' }
  ]
  return (
    <div className="bg-linear-to-r from-cyan-400 via-blue-400 to-indigo-400 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full flex flex-col md:flex-row gap-8">
        
        {/* Left Side - Branding */}
        <div className="md:w-1/2 text-black m-5 bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 h-10 w-10">
            AlumniConnect
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Where Graduates and Students Connect
          </p>
          
          <div className="space-y-4">
            {['Professional Networking', 'Mentorship Programs', 'Career Opportunities', 'Event Management', 'Alumni Directory'].map((feature, index) => (
              <div key={index} className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-3">
                  <span className="text-sm">✓</span>
                </div>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Right Side - Login Form */}
        <div className="md:w-1/2">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome Back
            </h2>
            <p className="text-gray-600 mb-8">
              Sign in to your account
            </p>
            
            <form onSubmit={handleSubmit}>
              {/* Role Selection */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Login as
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {roleOptions.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => setFormData({...formData, role: option.value})}
                      className={`py-3 rounded-lg border-2 text-center transition-all ${
                        formData.role === option.value 
                          ? 'border-primary-500 bg-primary-50 text-primary-700' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Email Field */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="you@example.com"
                  required
                />
              </div>
              
              {/* Password Field */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="••••••••"
                  required
                />
              </div>
              
              {/* Submit Button */}
              <button 
                type="submit" 
                className="btn-primary w-full py-3"
                disabled={loading}
              >
                {loading ? 'Signing in...' : 'Sign In'}
              </button>
              
              <div className="mt-6 text-center">
                <p className="text-gray-600">
                  Don't have an account?{' '}
                  <Link to="/register" className="text-primary-600 font-semibold hover:text-primary-700">
                    Sign up
                  </Link>
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  <a href="#" className="hover:text-primary-600">Forgot password?</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
