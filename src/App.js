import './App.css';
import React, { createContext } from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import Layout from './components/Layout';



function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
}

export default App;
