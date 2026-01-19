import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/auth/Login'
import AlumniDashboard from './pages/dashboard/AlumniDashboard'
import StudentDashboard from './pages/dashboard/StudentDashboard'
<<<<<<< HEAD
import Header from './components/Header'
=======
import Header from './components/layout/Header'
import Registration from './pages/auth/registration'
>>>>>>> 12838e0662922b894eddbffb1321974e66070aea

const App = ()=>{
  const isAuthenticated = false;
  const userRole = 'student'; 

  return (
    <div className="">
      {isAuthenticated && <Header />}
      
      <Routes>
        <Route path="/login" element={isAuthenticated ? <Navigate to="/"/> :<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route 
          path="/dashboard" 
          element={
            isAuthenticated ? (
              userRole === 'alumni' ? 
                <AlumniDashboard /> : 
                <StudentDashboard />
            ) : (
              <Navigate to="/login" replace />
            )
          } 
        />
        
        <Route 
          path="/" 
          element={
            <Navigate to={isAuthenticated ? "/dashboard" : "/login"} replace />
          } 
        />
        
        {/* 404 Page */}
        <Route 
          path="*" 
          element={
            <div className="flex items-center justify-center min-h-screen">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
                <p className="text-gray-600 mb-6">Page not found</p>
                <a 
                  href="/" 
                  className="btn-primary inline-block"
                >
                  Go Home
                </a>
              </div>
            </div>
          } 
        />
      </Routes> 
    </div>
  )
}

export default App