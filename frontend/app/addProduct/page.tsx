"use client"
import React, { useReducer } from 'react';
import { FaStore } from "react-icons/fa";
import { ActionType, initialState, reducer, ProductFormData  } from '../utils/formReducer';
import Pricing from './Pricing';
import Publish from './Publish';
import General from './General';

const AddProductPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleNextStep = () => {
    dispatch({ type: ActionType.NEXT_STEP });
  };

  const handlePrevStep = () => {
    dispatch({ type: ActionType.PREV_STEP });
  };

  const updateFormData = (data: Partial<ProductFormData>) => {
    dispatch({ type: ActionType.UPDATE_FORM, payload: data });
  };


  return (
    <div className='min-h-screen bg-base-200 flex flex-col items-center p-4'>
      
      <div className='flex items-center mb-6 text-black'>
        <FaStore className='text-4xl mr-2'/>
        <h1 className='text-2xl font-bold'>Add Product</h1>
      </div>

      <div className='w-full max-w-lg bg-white p-8 rounded-lg shadow-md'>
        <div className="text-center mb-6">
          <h2 className="text-lg font-semibold mb-2">Add Product</h2>
        </div>

        <ul className="steps w-full mb-4 pb-6 text-black">
          <li className={`step ${state.currentStep >= 1 ? 'step-primary' : ''}`}>General</li>
          <li className={`step ${state.currentStep >= 2 ? 'step-primary' : ''}`}>Pricing</li>
          <li className={`step ${state.currentStep >= 3 ? 'step-primary' : ''}`}>Publish</li>
        </ul>

        {state.currentStep === 1 && <General formData={state.formData} updateFormData={updateFormData} />}
        {state.currentStep === 2 && <Pricing formData={state.formData} updateFormData={updateFormData} />}
        {state.currentStep === 3 && <Publish formData={state.formData} updateFormData={updateFormData} />}


        <div className='flex justify-between'>
          {state.currentStep > 1 && <button className='btn btn-secondary rounded-lg' onClick={handlePrevStep}>Previous step</button>}
          {state.currentStep < 4 
            ? <button className='btn btn-primary rounded-lg' onClick={handleNextStep}>Next step</button>
            : <button className='btn btn-primary rounded-lg'>Submit</button>
          }
        </div>
      </div>
    </div>


    //     <div className='form-control mb-4'>
    //       <label className='label'>
    //         <span className='label-text'>Name</span>
    //       </label>
    //       <input type='text' placeholder='Universal Design System' className='input input-bordered w-full' />
    //     </div>

    //     <div className='form-control mb-4'>
    //       <label className='label'>
    //         <span className='label-text'>Description</span>
    //       </label>
    //       <textarea placeholder='Powerful Figma Design System for creating landing pages, websites and dashboards.' className='textarea textarea-bordered w-full'></textarea>
    //     </div>

    //     <div className='form-control mb-4'>
    //       <label className='label'>
    //         <span className='label-text'>Category</span>
    //       </label>
    //       <select className='select select-bordered w-full'>
    //         <option disabled selected>Select Category</option>
    //         <option>Design</option>
    //         <option>Development</option>
    //         <option>Marketing</option>
    //       </select>
    //     </div>

    //     <div className='flex mb-4 gap-4'>
    //       <div className='w-1/2'>
    //         <label className='label'>
    //           <span className='label-text'>Size</span>
    //         </label>
    //         <div className="dropdown w-full">
    //           <div tabIndex={0} role="button" className="btn w-full rounded-lg">Select Size</div>
    //           <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-full p-2 shadow">
    //             <li><a>Small</a></li>
    //             <li><a>Medium</a></li>
    //             <li><a>Large</a></li>
    //           </ul>
    //         </div>
    //       </div>

    //       <div className='w-1/2'>
    //         <label className='label'>
    //           <span className='label-text'>Gender</span>
    //         </label>
    //         <div className="form-control">
    //           <label className="label cursor-pointer">
    //             <span className="label-text">Male</span>
    //             <input type="radio" name="gender" className="radio checked:bg-blue-500" defaultChecked />
    //           </label>
    //         </div>
    //         <div className="form-control">
    //           <label className="label cursor-pointer">
    //             <span className="label-text">Female</span>
    //             <input type="radio" name="gender" className="radio checked:bg-pink-500" />
    //           </label>
    //         </div>
    //       </div>
    //     </div>

    //     <div className='form-control mb-4 pb-4'>
    //       <label className='label'>
    //         <span className='label-text'>Images</span>
    //       </label>
    //       <input type="file" className="file-input file-input-bordered file-input-success w-full max-w-xs rounded-lg" />
    //     </div>

    //     <div className='flex justify-between'>
    //       <button className='btn btn-secondary rounded-lg'>Save as draft</button>
    //       <button className='btn btn-primary rounded-lg'>Next step</button>
    //     </div>
    //   </div>
    // </div>
  )
}

export default AddProductPage;
