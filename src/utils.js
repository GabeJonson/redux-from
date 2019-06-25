export const keyManager = (actions, { prefix }) =>
  Object.keys(actions).reduce((acc, cur) => {
    acc[cur] = prefix + cur;
    return acc;
  }, {});

export const validations = formValues => {
  const errors = {};

  if (!formValues.name) {
    errors.name = 'Please enter your first name';
  }
  if (!formValues.email) {
    errors.email = 'Email field is required.';
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.email)
  ) {
    errors.email = 'Invalid email address.';
  }
  if (!formValues.gender) {
    errors.gender = 'Please select a gender.';
  }

  return errors;
};

const validate = () => new Promise(resolve => resolve('OK!'));

export const asyncValidate = (values /* , dispatch */) => {
  return validate().then(() => {
    if (values.email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)) {
      throw {
        email: 'Wrong email',
      };
    }
  });
};
