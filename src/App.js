
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Create from './components/Create';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/signup" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/create" element={<Create/>} />
      </Routes>
    </div>
  );
}

export default App;
