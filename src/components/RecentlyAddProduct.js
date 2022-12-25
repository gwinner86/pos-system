import React from 'react'
import './RecentlyAddProduct.css'
import { DataGrid } from '@mui/x-data-grid';
import { mockRecentItemsAdded } from '../data/data';



function RecentlyAddProduct() {
  const columns = [
    { field: 'id', headerName: 'ID'},
    { field: 'product', headerName: 'Product', flex : 1 },
    { field: 'price', headerName: 'Price' , type :"number" },
  ];


  
  return (
        <DataGrid 
          rows={mockRecentItemsAdded}
          columns={columns}
        />
    
  )
}

export default RecentlyAddProduct