import React from 'react';
import { connect } from 'react-redux';

const ThirdStepReduxForm = ({ formData }) => (
  <ul>
    {Object.keys(formData).map(data => (
      <li key={formData[data]}>{data}: {formData[data]}</li>
    ))}
  </ul>
);

const mapStateToProps = ({ form }) => ({ formData: form.formStep.values });

const ThirdStep = connect(mapStateToProps)(ThirdStepReduxForm);

export default ThirdStep;
