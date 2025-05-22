// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import App from './App.jsx';
import Bookings from './Bookings.jsx';  // our new page
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* Top nav */}
    <nav className="p-4 bg-gray-100">
      <Link to="/" className="mr-4 text-blue-600 hover:underline">Home</Link>
      <Link to="/bookings" className="text-blue-600 hover:underline">Bookings</Link>
    </nav>

    {/* Route definitions */}
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/bookings" element={<Bookings />} />
    </Routes>
  </BrowserRouter>
);