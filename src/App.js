import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import DetailProject from "./components/DetailProject"
import CardDetail from './components/CardDetail';

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/detaildata' element={<CardDetail />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
