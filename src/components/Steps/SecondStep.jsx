import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { required } from 'utils';

import Selector from '../Selector';

let SecondStepReduxForm = ({ chose }) => {
  return (
    <>
      <div>
        {chose.formStep.values.gender === 'male' ? (
          <Field
            name="drink"
            component={Selector}
            type="drink"
            validate={[required]}
            options={['whiskey', 'cola']}
          />
        ) : (
          <Field
            name="drink"
            component={Selector}
            type="drink"
            validate={[required]}
            options={['blue', 'pink']}
          />
        )}
      </div>
    </>
  );
};

SecondStepReduxForm = reduxForm({
  form: 'formStep',
  destroyOnUnmount: false,
})(SecondStepReduxForm);

const SecondStep = connect()(SecondStepReduxForm);

export default SecondStep;
