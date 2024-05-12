import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Detail from '../src/routes/Detail';
import Home from '../src/routes/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};


export default App;
