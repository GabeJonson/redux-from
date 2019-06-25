import { formActionTypes } from '../constants';

export const changeStepAction = step => dispatch => {
  dispatch({
    type: formActionTypes.CHANGE_STEP,
    step,
  });
};
