import React from 'react'
import Header from '../../components/Header'
import './NewSale.css'
import { useForm } from "react-hook-form";
import { DataGrid } from '@mui/x-data-grid';
import { mockRecentItemsAdded } from '../../data/data';

function NewSale() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const GetSearchData = (data) => {
      console.log(data)
  }

  const columns = [
    { field: 'id', headerName: 'ID'},
    { field: 'product', headerName: 'Product', flex : 1 },
    { field: 'price', headerName: 'Price' , type :"number" },
  ];

  return (
    <div>
       <Header title="New Sale" subtitle="Sale a product" />
       <div className='sale-container'>
           <div className='sale-left-container'>
                <div className='search-section'>
                   <div className='card-section'>
                      <form onSubmit={handleSubmit(GetSearchData)}>
                        <div className='form-group'>
                              <div className='form-control'> 
                                  <label> Search by product name</label>
                                  <div className='search-box'>
                                  <input type='text' name='searchByProductName' {...register('searchByProductName', { required: false })} />
                                  <button type='submit' className='btn btn-submit-color'>Search</button>
                                  </div>
                              </div>
                          </div>
                      </form>    
                     </div>
                </div>
                <div className='selected-product-sale-left'>
                     <div className='card-section'>
                      <div className='table'>
                          <DataGrid
                            rows={mockRecentItemsAdded}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                            checkboxSelection
                          />
                      </div>
                     </div>
                </div>
           </div>
           <div className='sale-right-container'>
           <h1> Right container</h1>
           </div>
       </div>
    </div>
  )
}

export default NewSale