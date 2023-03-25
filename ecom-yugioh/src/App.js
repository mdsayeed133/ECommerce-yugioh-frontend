import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllCards } from './reducers/cardReducer/cardSlice';
import Home from './components/home/home';
import LoginPage from './components/login/login';
import RegisterPage from './components/register/register';
import StorePage from './components/storePage/StorePage';
import { useEffect } from 'react';

function App() {
  const dispatch= useDispatch();
  const cards = useSelector((state) => state.card.cards);

  useEffect(()=>{dispatch(getAllCards())},[dispatch])
  
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path='/register' element={<RegisterPage />}/>
          <Route path='/store' element={<StorePage cardAll={cards}/>}/>
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
