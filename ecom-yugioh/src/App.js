import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from './components/home/home';
import LoginPage from './components/login/login';
import RegisterPage from './components/register/register';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path='/register' element={<RegisterPage />}/>
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
