import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/home';

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path='/' element={<Home />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
