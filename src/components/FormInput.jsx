import React from 'react';

const FormInput = ({
  input,
  label,
  type,
  meta: { asyncValidating, touched, error },
}) => (
  <div>
    <div className={asyncValidating ? 'invalid' : ''}>
      <input {...input} type={type} placeholder={label} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

export default FormInput;
