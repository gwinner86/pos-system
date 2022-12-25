import { Divider } from '@mui/material';
import React,{useEffect} from 'react';
import './App.css';
import Index from './pages/dashboard/Index';
import MainSidebar from './pages/sidebar/MainSidebar';
import Topbar from './pages/topbar/Topbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import NewProduct from './pages/products/NewProduct';
import ProductsList from './pages/products/ProductsList';
import Login from './pages/auth/Login';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import GetCategories from './pages/product-cats/GetCategories';
import AddCategory from './pages/product-cats/AddCategory';
import SalesList from './pages/sales/SalesList'
import NewSale from './pages/sales/NewSale'
import AddBrand from './pages/product-brands/AddBrand';
import BrandList from './pages/product-brands/BrandList';

function App() {

  const authUser = useSelector(selectUser)

  useEffect(() => {
     

  }, [])

  return (
   <Router>
     {!authUser ? <Login/> : 
    
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
                <Route path='/getcategories' element={<GetCategories />} />
                <Route path='/addcategory' element={<AddCategory />} />
                <Route path='/getsales' element={<SalesList />} />
                <Route path='/addsale' element={<NewSale />} />
                <Route path='/getbrands' element={<BrandList />} />
                <Route path='/addbrand' element={<AddBrand />} />
              </Routes>
          </main>
        </div>
     </div>
   </div>
    }

</Router>
  );
}

export default App;
