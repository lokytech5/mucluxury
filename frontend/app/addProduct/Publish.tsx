import React from 'react'
import { ProductFormData } from '../utils/formReducer';

interface Props {
    formData: ProductFormData;
    updateFormData: (data: Partial<ProductFormData>) => void;
  }
  

const Publish =({formData, updateFormData}: Props) => {
  return (

    <>
    <div className='form-control mb-4 pb-4'>
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