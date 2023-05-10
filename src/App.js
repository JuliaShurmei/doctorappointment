import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Button } from 'antd';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
