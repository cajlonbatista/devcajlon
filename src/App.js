import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header/Header';
import { Routes } from './routes';

function App() {
  return (
    <BrowserRouter>
      <Routes></Routes>
      <Header></Header>
    </BrowserRouter>
  );
}

export default App;
