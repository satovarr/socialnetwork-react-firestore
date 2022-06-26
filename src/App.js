import { Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { Register } from './pages/Register';
import { AuthProvider } from './context/authContext';
import { ProtectedRoute } from './pages/ProtectedRoute';

function App() {
  return (
    <div className="bg-slate-300 h-screen text-black flex">
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
    /*
    <div className="App bg-light" style={{height: "100vh"}}>
      <h1 className='pd-5 mt-5'>Studia</h1>
      <Login/>
    </div>
    */
  );
}

export default App;
