import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CreateEmployee, DetailEmployee, Homepage } from './pages';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/details/:id" element={<DetailEmployee />} />
      <Route path="/create" element={<CreateEmployee />} />
    </Routes>
  </BrowserRouter>
);
