export interface FormData {
    name: string;
    description: string;
    category: string;
    price: string;
    stock: string;
    color: string;
    quantity: number;
    images: FileList | null;
    settings: {
      additionalSetting?: string;
    };
  }

export interface State {
    currentStep: number;
    formData: FormData;
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
    settings: {}
  }
};

export enum ActionTypes {
    NEXT_STEP = 'NEXT_STEP',
    PREV_STEP = 'PREV_STEP',
    UPDATE_FORM = 'UPDATE_FORM'
}

export type Action = 
  | { type: ActionTypes.NEXT_STEP }
  | { type: ActionTypes.PREV_STEP }
  | { type: ActionTypes.UPDATE_FORM; payload: Partial<FormData> };


export const reducer = (state:State, action:Action): State => {
    switch (action.type) {
        case ActionTypes.NEXT_STEP:
            return {...state, currentStep: state.currentStep + 1};
        case ActionTypes.PREV_STEP:
            return {...state, currentStep: state.currentStep - 1};
        case ActionTypes.UPDATE_FORM:
            return {...state, formData: { ...state.formData, ...action.payload } }         
        default:
            return state;
    }
}