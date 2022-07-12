import { Routes, Route } from 'react-router-dom';
import { Login } from './pages/login/Login';
import { Home } from './pages/home/Home';
import { Register } from './pages/register/Register';
import { AuthProvider } from './context/authContext';
import { ProtectedRoute } from './pages/ProtectedRoute';

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path='/' element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
