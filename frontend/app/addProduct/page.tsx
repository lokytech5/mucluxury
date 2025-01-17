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

  const handleSubmit = () => {
    // Handle form submission
    console.log('Form submitted:', state.formData);
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
          {state.currentStep < 3 
            ? <button className='btn btn-primary rounded-lg' onClick={handleNextStep}>Next step</button>
            : <button className='btn btn-primary rounded-lg'>Publish</button>
          }
        </div>
      </div>
    </div>
  )
}

export default AddProductPage;
