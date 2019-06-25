import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import step from './step';

const rootReducer = combineReducers({ form: formReducer, current: step });

export default rootReducer;
