export interface ProductFormData  {
    name: string;
    description: string;
    category: string;
    price: string;
    stock: string;
    color: string;
    quantity: number;
    images: FileList | null;
    discount: string; // New field for discount
    discountType: string; // New field for discount type
    settings: {
      additionalSetting?: string;
    };
  }
  
  export interface State {
    currentStep: number;
    formData: ProductFormData ;
  }
  
  export const initialState: State = {
    currentStep: 1,
    formData: {
      name: '',
      description: '',
      category: '',
      price: '',
      stock: '',
      color: '',
      quantity: 0,
      images: null,
      discount: '', // Initialize the discount field
      discountType: '', // Initialize the discount type field
      settings: {}
    }
  };
  
  export enum ActionType {
    NEXT_STEP = 'NEXT_STEP',
    PREV_STEP = 'PREV_STEP',
    UPDATE_FORM = 'UPDATE_FORM'
  }
  
  export type Action = 
    | { type: ActionType.NEXT_STEP }
    | { type: ActionType.PREV_STEP }
    | { type: ActionType.UPDATE_FORM; payload: Partial<ProductFormData> };
  
  export const reducer = (state: State, action: Action): State => {
    switch (action.type) {
      case ActionType.NEXT_STEP:
        return { ...state, currentStep: state.currentStep + 1 };
      case ActionType.PREV_STEP:
        return { ...state, currentStep: state.currentStep - 1 };
      case ActionType.UPDATE_FORM:
        return { ...state, formData: { ...state.formData, ...action.payload } };
      default:
        return state;
    }
  };
  