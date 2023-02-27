import './App.css';
import React, { createContext } from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import Layout from './components/Layout';
import { UserDataContext } from './UserDataContext';
import ProfilePage from './Pages/ProfilePage'
import Homepage from './Pages/Homepage';
import AddProduct from './Pages/AddProduct'
import Footer from './components/Footer';
import MyProductsPage from './Pages/MyProductsPage';
import ProductFullPage from './Pages/ProductFullPage';
axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserDataContext>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route path='/home' element={<Homepage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/myproducts' element={<MyProductsPage />} />
          <Route path='/products/addProduct' element={<AddProduct />} />
          <Route path='/myproducts/:id' element={<ProductFullPage />} />
        </Route>
      </Routes>
    </UserDataContext>
  );
}

export default App;
