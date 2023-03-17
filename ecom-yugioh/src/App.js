import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from './components/home/home';
import Login from './components/login/login';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
