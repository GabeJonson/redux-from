import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { validations, asyncValidate } from 'utils';

import FormInput from '../FormInput';
import Selector from '../Selector';

let FirstStepReduxForm = () => {
  return (
    <>
      <div>
        <Field name="name" component={FormInput} type="text" label="name" />
      </div>
      <div>
        <Field name="email" component={FormInput} type="text" label="email" />
      </div>
      <div>
        <Field name="gender" component={Selector} type="email" />
      </div>
    </>
  );
};

FirstStepReduxForm = reduxForm({
  form: 'steps',
  destroyOnUnmount: false,
  validations,
  asyncValidate,
})(FirstStepReduxForm);

const FirstStep = connect(null)(FirstStepReduxForm);

export default FirstStep;
