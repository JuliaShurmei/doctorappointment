import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Button } from 'antd';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import ProtectedRoute from './components/ProtectedRoute';
import Profile from './pages/Profile';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>} />
        <Route path='/profile' element={<ProtectedRoute><Profile/></ProtectedRoute>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
