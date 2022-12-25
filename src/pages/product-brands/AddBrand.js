import React from 'react'
import Header from '../../components/Header'
import './AddBrand.css'
import { useForm } from "react-hook-form";
import SweetAlertWrapper from '../../sweetAlert';
import SweetAlertConfig from '../../SwalConfig';

function AddBrand() {

  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();

  const sweetAlert = new SweetAlertWrapper();
  const  CreateCategoryt = (data) => { 
 
    sweetAlert.showDialogYesOrNo(Object.assign(SweetAlertConfig, {
      confirmButtonText : 'Yes, add brand!'
    }), () => {
      console.log(data)
      sweetAlert.showMessage("Brand", "Brand added!")
    })
  }
 
  return (
    <div>
       <Header title="Add Brand" subtitle="Create new Brand" />

       <div className='main-content'>
        <form onSubmit={handleSubmit(CreateCategoryt)}>
            <div className='form-group'>
                 <div className='form-control'>
                    <label> Brand Name</label>
                    <input name='name'   type='text' {...register('name', { required: true })} />
                    {errors.name && <span className='input__errors'>Brand name is required</span>}
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

export default AddBrand