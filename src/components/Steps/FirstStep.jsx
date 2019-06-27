import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { required, minValue, email } from 'utils';

import FormInput from '../FormInput';
import Selector from '../Selector';

let FirstStepReduxForm = () => {
  return (
    <>
      <div>
        <Field
          name="name"
          component={FormInput}
          type="text"
          label="name"
          validate={[required, minValue(3)]}
        />
      </div>
      <div>
        <Field
          name="email"
          component={FormInput}
          type="text"
          label="email"
          validate={[required, minValue(3), email]}
        />
      </div>
      <div>
        <Field
          name="gender"
          component={Selector}
          type="email"
          validate={[required]}
          options={['male', 'female']}
        />
      </div>
    </>
  );
};

FirstStepReduxForm = reduxForm({
  form: 'formStep',
  destroyOnUnmount: false,
  asyncBlurFields: ['name', 'email', 'gender'],
})(FirstStepReduxForm);

const FirstStep = connect(null)(FirstStepReduxForm);

export default FirstStep;
