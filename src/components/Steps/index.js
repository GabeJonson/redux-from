import React from 'react';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';

const Steps = () => {
  const step = 'first';

  switch (step) {
    case 'first':
      return <FirstStep />;
    case 'second':
      return <SecondStep />;
    default:
      return <ThirdStep />;
  }
};

export default Steps;
