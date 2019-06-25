import { formActionTypes } from '../constants';

const step = (state = { step: 1 }, action) => {
  switch (action.type) {
    case formActionTypes.CHANGE_STEP:
      return {
        step: action.step,
      };
    default:
      return state;
  }
};

export default step;
