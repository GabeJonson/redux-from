import React from 'react';

const Selector = ({
  input,
  options,
  meta: { asyncValidating, touched, error },
}) => (
  <>
    <select
      name="gender"
      {...input}
      className={asyncValidating ? 'invalid' : ''}
    >
      <option value="" />
      {options.map(option => (
        <option value={option} key={option}>
          {option}
        </option>
      ))}
    </select>
    {touched && error && <span>{error}</span>}
  </>
);

export default Selector;
