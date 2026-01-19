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
  <div className="min-h-screen w-full bg-[url('https://images.pexels.com/photos/35665797/pexels-photo-35665797.jpeg')] bg-cover bg-center flex items-center justify-center p-4">
    <div className="max-w-5xl w-full flex flex-col lg:flex-row shadow-xl rounded-2xl overflow-hidden">
      
      {/* Left Side - Solid Dark Blue */}
      <div className="lg:w-1/2 bg-blue-950 text-white p-8 flex flex-col justify-center">
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-xl bg-blue-800 flex items-center justify-center mr-4">
              <span className="text-2xl">🎓</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold">AlumniConnect</h1>
              <p className="text-blue-200 mt-1">Where Graduates and Students Connect</p>
            </div>
          </div>
        </div>
        
        <div className="space-y-4 mb-10">
          {['Professional Networking', 'Mentorship Programs', 'Career Opportunities', 'Event Management', 'Alumni Directory'].map((feature, index) => (
            <div key={index} className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-blue-800 flex items-center justify-center mr-4">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <span>{feature}</span>
            </div>
          ))}
        </div>
        
        <p className="text-blue-300 text-sm">
          Join thousands of alumni and students around the world.
        </p>
      </div>
      
      {/* Right Side - White */}
      <div className="lg:w-1/2 bg-white/95 p-8 flex flex-col justify-center">
        <div className="max-w-md mx-auto w-full">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Welcome Back</h2>
          <p className="text-gray-600 mb-8">Sign in to access your account</p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Login as</label>
              <div className="grid grid-cols-3 gap-3">
                {roleOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setFormData({...formData, role: option.value})}
                    className={`py-3 rounded-lg border font-medium ${
                      formData.role === option.value 
                        ? 'border-blue-500 bg-blue-50 text-blue-700' 
                        : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="you@example.com"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="••••••••"
                required
              />
            </div>
            
            <button 
              type="submit" 
              className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              disabled={loading}
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
            
            <div className="text-center space-y-2">
              <p className="text-gray-600 text-sm">
                Don't have an account?{' '}
                <Link to="/register" className="text-blue-600 font-medium hover:underline">
                  Sign up
                </Link>
              </p>
              <p className="text-sm">
                <a href="#" className="text-gray-500 hover:text-blue-600 hover:underline">
                  Forgot password?
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
);
}

export default Login
