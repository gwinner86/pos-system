import React,{useState,useEffect} from 'react'
import Header from '../../components/Header'
import './AddCategory.css'
import { useForm } from "react-hook-form";
// const Swal = require('sweetalert2')
import SweetAlertWrapper from '../../sweetAlert';
import SweetAlertConfig from '../../SwalConfig';

function AddCategory() {

  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
 const sweetAlert = new SweetAlertWrapper();
 const  CreateCategoryt = (data) => { 

   sweetAlert.showDialogYesOrNo(Object.assign(SweetAlertConfig, {
     confirmButtonText : 'Yes, add category!'
   }), () => {
     console.log(data)
     sweetAlert.showMessage("Category", "Category added!")
   })
 }


 useEffect(() => {
    reset({
       name: null 
    })

  }, [reset])

  return (
    <div>
       <Header title="Add Product Category" subtitle="Create new product Category" />
        <div className='main-content'>
        <form onSubmit={handleSubmit(CreateCategoryt)}>
            <div className='form-group'>
                 <div className='form-control'>
                    <label> Category Name</label>
                    <input name='name'   type='text' {...register('name', { required: true })} />
                    {errors.name && <span className='input__errors'>Category name is required</span>}
                 </div>
                 <div className='form-control'>
                    <label>Category Code</label>
                    <input name='code'   type='text' {...register('code', { required: true })} />
                    {errors.code && <span className='input__errors'>Category code is required</span>}
                 </div>
            </div>
              <div className='form-group'>
                <div className='form-control'>
                <label>Description</label>
                  <textarea  rows="4" type='text' name='description'  {...register('description', { required: false })}  />
                </div>
              </div>
           <input type='submit' className='btn btn-submit-color' value='Submit' />
          </form>

        </div>
    </div>
  )
}

export default AddCategory