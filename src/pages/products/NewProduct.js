import React,{useState} from 'react'
import Header from '../../components/Header'
import './NewProduct.css'
import { useForm } from "react-hook-form";
import { Button } from '@material-ui/core'
import ImageUploader from 'react-images-upload';

function NewProduct() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [setpicture,pictures] = useState(null)

const AddProduct = (data) => { 
   console.log(data)
}
 const onDrop = (pictureFiles, pictureDataURLs) => {
  
  setpicture({
    pictures: pictureFiles
  })
 
}

  return (
    <div>
      <Header title="Add Product" subtitle="Create new product"/>

      <div className='main-content'>
          <form onSubmit={handleSubmit(AddProduct)}>
            <div className='form-group'>
                 <div className='form-control'>
                    <label> Product Name</label>
                    <input name='name'   type='text' {... ('name', { required: true })} />
                    {errors.name && <span className='input__errors'>Product name is required</span>}
                 </div>
                 <div className='form-control'>
                    <label>Category Name</label>
                    {/* <input name='category'   type='text' {...register('category', { required: true })} /> */}
                     <select name='category' {...register('category', { required: true })}>
                        <option>Food</option>
                        <option>Books</option>
                        <option>Phones</option>
                     </select>
                    {errors.category && <span className='input__errors'>Category name is required</span>}
                 </div>
                 <div className='form-control'>
                    <label>Brand Name</label>
                     <select name='brand' {...register('brand', { required: true })}>
                        <option>Sumsung</option>
                        <option>Techno</option>
                        <option>IPhone</option>
                     </select>
                    {errors.brand && <span className='input__errors'>Brand name is required</span>}
                 </div>
            </div>

            <div className='form-group'>
                 <div className='form-control'>
                    <label> SKU</label>
                    <input name='SKU'   type='text' {...register('SKU', { required: true })} />
                    {errors.SKU && <span className='input__errors'>SKU is required</span>}
                 </div>
                 <div className='form-control'>
                    <label>Quantity</label>
                    <input name='quantity'   type='text' {...register('quantity', { required: true })} />
                    {errors.quantity && <span className='input__errors'>Quantity is required</span>}
                 </div>
            </div>

            <div className='form-group'>
                 <div className='form-control'>
                    <label> Description</label>
                    <textarea name='description' rows={5}   type='text' {...register('description', { required: false })} />
                 </div>
            </div>
            <div className='form-group'>
                  <div className='form-control'>
                    <label>Discount type</label>
                     <select name='discount' {...register('discount', { required: true })}>
                        <option>0%</option>
                        <option>20%</option>
                        <option>15%</option>
                     </select>
                    {errors.discount && <span className='input__errors'>Discount type is required</span>}
                 </div>
                 <div className='form-control'>
                    <label> Price</label>
                    <input name='price'   type='text' {...register('price', { required: true })} />
                    {errors.price && <span className='input__errors'>Product price is required</span>}
                 </div>
                
                 <div className='form-control'>
                    <label>Status</label>
                     <select name='status' className='selector' {...register('status', { required: true })}>
                        <option className='option'>Close</option>
                        <option className='option'>Open</option>
                     </select>
                    {errors.status && <span className='input__errors'>Status is required</span>}
                 </div>
            </div>
            <div className='form-group'>
                 <div className='form-control'>
                 <ImageUploader
                      withIcon={true}
                      buttonText='Choose images'
                      onChange={onDrop}
                      imgExtension={['.jpg', '.gif', '.png', '.gif']}
                      maxFileSize={5242880}
                  />
                 </div>
            </div>
           <div className='form-button'>
           <Button type='submit' className='add_product_btn'>Add Product</Button>
           </div>
          </form>
      </div>
    </div>
  )
}

export default NewProduct