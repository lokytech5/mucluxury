import React from 'react'
import { ProductFormData } from '../utils/formReducer';

interface Props {
    formData: ProductFormData;
    updateFormData: (data: Partial<ProductFormData>) => void;
  }
  

const Publish =({formData, updateFormData}: Props) => {
  return (

    <>
    <div className='form-control mb-4'>
      <label className='label'>
        <span className='label-text'>Quantity</span>
      </label>
      <input 
        type='number' 
        placeholder='Enter quantity' 
        className='input input-bordered w-full'
        value={formData.quantity}
        onChange={(e) => updateFormData({ quantity: parseInt(e.target.value, 10) })}
      />
    </div>

    <div className='form-control mb-4'>
      <label className='label'>
        <span className='label-text'>Images</span>
      </label>
      <input 
        type="file" 
        className="file-input file-input-bordered file-input-success w-full max-w-xs rounded-lg" 
        onChange={(e) => updateFormData({ images: e.target.files })}
      />
    </div>
  </>
  )
}

export default Publish