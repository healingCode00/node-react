import React from 'react';
import { Route, Routes } from 'react-router';
import './app.css';

import Main from './pages/Main';

function App() {


  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  )
}

export default App;
