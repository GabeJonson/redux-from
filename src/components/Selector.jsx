import React from 'react';

const Selector = ({ input, meta: { asyncValidating, touched, error } }) => (
  <>
    <select
      name="gender"
      {...input}
      className={asyncValidating ? 'invalid' : ''}
    >
      <option value="" />
      <option value="male">male</option>
      <option value="female">female</option>
    </select>
    {touched && error && <span>{error}</span>}
  </>
);

export default Selector;
