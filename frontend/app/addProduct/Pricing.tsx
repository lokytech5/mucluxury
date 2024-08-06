import React from 'react'
import { ProductFormData } from '../utils/formReducer';

interface Props {
    formData: ProductFormData;
    updateFormData: (data: Partial<ProductFormData>) => void;
  }

const Pricing = ({formData, updateFormData}: Props) => {
  return (
    <div className='p-6 bg-gray-100 rounded-lg shadow-md mb-6'>
      <h2 className='text-lg font-semibold mb-4'>Pricing And Stock</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text font-semibold'>Base Pricing</span>
          </label>
          <input
            type='text'
            placeholder='Enter price'
            className='input input-bordered w-full'
            value={formData.price}
            onChange={(e) => updateFormData({ price: e.target.value })}
          />
        </div>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text font-semibold'>Stock</span>
          </label>
          <input
            type='text'
            placeholder='Enter stock quantity'
            className='input input-bordered w-full'
            value={formData.stock}
            onChange={(e) => updateFormData({ stock: e.target.value })}
          />
        </div>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text font-semibold'>Discount</span>
          </label>
          <input
            type='text'
            placeholder='Enter discount'
            className='input input-bordered w-full'
            value={formData.discount}
            onChange={(e) => updateFormData({ discount: e.target.value })}
          />
        </div>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text font-semibold'>Discount Type</span>
          </label>
          <select
            className='select select-bordered w-full'
            value={formData.discountType}
            onChange={(e) => updateFormData({ discountType: e.target.value })}
          >
            <option value=''>Select discount type</option>
            <option value='Chinese New Year Discount'>Chinese New Year Discount</option>
            {/* Add more discount types as needed */}
          </select>
        </div>
      </div>
    </div>
  )
}

export default Pricing