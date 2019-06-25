import React from 'react';
import { connect } from 'react-redux';

import { formSteps } from '../../constants';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';

const renderStep = step => {
  switch (step) {
    case formSteps.first:
      return <FirstStep />;
    case formSteps.second:
      return <SecondStep />;
    default:
      return <ThirdStep />;
  }
};

const StepsConnect = () => {
  const submit = values => {
    console.log(values);
  };
  return <form onSubmit={submit}>{renderStep(1)}</form>;
};

const mapStateToProps = ({ form }) => ({ form });

const Steps = connect(mapStateToProps)(StepsConnect);

export default Steps;
