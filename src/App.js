import { Divider } from '@mui/material';
import React from 'react';
import './App.css';
import Index from './pages/dashboard/Index';
import MainSidebar from './pages/sidebar/MainSidebar';
import Topbar from './pages/topbar/Topbar';
import {
  Routes,
  Route
} from "react-router-dom";
import NewProduct from './pages/products/NewProduct';
import ProductsList from './pages/products/ProductsList';

function App() {
  return (
    <div className="app">
           
         <div className='app__menu'> 
            <div className='app__sidebar'>
              <MainSidebar />
            </div>
            <div className='app__topbar'>
              <Topbar />

              <main className='app__body'>
                  <Routes>
                  <Route path='/' element={<Index />} />
                  <Route path='/addproduct' element={<NewProduct />} />
                  <Route path='/getproducts' element={<ProductsList />} />
                  </Routes>
              
              </main>
            </div>
         </div>
        
    </div>
  );
}

export default App;
