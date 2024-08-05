import React from 'react'
import { ProductFormData } from '../utils/formReducer';

interface Props {
  formData: ProductFormData;
  updateFormData: (data: Partial<ProductFormData>) => void;
}

const General = ({formData, updateFormData}: Props) => {
  return (
    <div>
    <div className='form-control mb-4'>
      <label className='label'>
        <span className='label-text'>Name</span>
      </label>
      <input 
        type='text' 
        placeholder='Universal Design System' 
        className='input input-bordered w-full' 
        value={formData.name}
        onChange={(e) => updateFormData({ name: e.target.value })}
      />
    </div>

    <div className='form-control mb-4'>
      <label className='label'>
        <span className='label-text'>Description</span>
      </label>
      <textarea 
        placeholder='Powerful Figma Design System for creating landing pages, websites and dashboards.' 
        className='textarea textarea-bordered w-full'
        value={formData.description}
        onChange={(e) => updateFormData({ description: e.target.value })}
      ></textarea>
    </div>

    <div className='form-control mb-4'>
      <label className='label'>
        <span className='label-text'>Category</span>
      </label>
      <select 
        className='select select-bordered w-full'
        value={formData.category}
        onChange={(e) => updateFormData({ category: e.target.value })}
      >
        <option disabled selected>Select Category</option>
        <option>Design</option>
        <option>Development</option>
        <option>Marketing</option>
      </select>
    </div>

    <div className='flex mb-4 gap-4'>
           <div className='w-1/2'>
             <label className='label'>
               <span className='label-text'>Size</span>
             </label>
             <div className="dropdown w-full">
               <div tabIndex={0} role="button" className="btn w-full rounded-lg">Select Size</div>
               <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-full p-2 shadow">
                 <li><a>Small</a></li>
                 <li><a>Medium</a></li>
                 <li><a>Large</a></li>
               </ul>
             </div>
           </div>

           <div className='w-1/2'>
             <label className='label'>
               <span className='label-text'>Gender</span>
             </label>
             <div className="form-control">
               <label className="label cursor-pointer">
                 <span className="label-text">Male</span>
                 <input type="radio" name="gender" className="radio checked:bg-blue-500" defaultChecked />
               </label>
             </div>
             <div className="form-control">
               <label className="label cursor-pointer">
                 <span className="label-text">Female</span>
                 <input type="radio" name="gender" className="radio checked:bg-pink-500" />
               </label>
             </div>
           </div>
        </div>

  </div>
  )
}

export default General