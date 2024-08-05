import React from 'react'
import { ProductFormData } from '../utils/formReducer';

interface Props {
    formData: ProductFormData;
    updateFormData: (data: Partial<ProductFormData>) => void;
  }

const Pricing = ({formData, updateFormData}: Props) => {
  return (
    <div className='form-control mb-4'>
    <label className='label'>
      <span className='label-text'>Price</span>
    </label>
    <input 
      type='text' 
      placeholder='Enter price' 
      className='input input-bordered w-full' 
      value={formData.price}
      onChange={(e) => updateFormData({ price: e.target.value })}
    />
  </div>
  )
}

export default Pricing