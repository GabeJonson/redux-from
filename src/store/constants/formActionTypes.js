import { keyManager } from 'utils';

const types = {
  CHANGE_STEP: 'CHANGE_STEP',
};

const prefix = { prefix: 'STEP_FORM: ' };

export const formActionTypes = keyManager(types, prefix);
