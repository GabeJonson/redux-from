import { formActionTypes } from '../constants';

const initialState = {
  step: 1,
  name: '',
  email: '',
  gender: '',
  selected: '',
};

const form = (state = initialState, action) => {
  switch (action.type) {
    case formActionTypes.INIT_FORM:
      return {
        ...state,
      };
    case formActionTypes.STORE_FORM_VALUE:
      return {
        ...state,
      };
    case formActionTypes.SET_FORM_STATE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default form;
