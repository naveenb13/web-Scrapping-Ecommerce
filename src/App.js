import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Addnewproduct from './Addnewproduct';
import Signup from './Signup';

function App() {
  return (
    <div className="container1">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path='/home/addnewproduct' element={<Addnewproduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
