import React from 'react';
import { connect } from 'react-redux';

import StepChanger from 'components/StepChanger';
import { formSteps } from '../../constants';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';

const renderStep = (step, form) => {
  switch (step) {
    case formSteps.first:
      return <FirstStep />;
    case formSteps.second:
      return <SecondStep chose={form} />;
    default:
      return <ThirdStep />;
  }
};

const StepsConnect = ({ step, form }) => {
  const submit = event => {
    event.preventDefault();
    event.persist();

    alert('KO!');
  };
  return (
    <form onSubmit={submit}>
      {renderStep(step, form)}
      <StepChanger />
    </form>
  );
};

const mapStateToProps = ({ current, form }) => ({ step: current.step, form });

const Steps = connect(mapStateToProps)(StepsConnect);

export default Steps;
