import React from 'react';
import { connect } from 'react-redux';

import { changeStepAction } from 'store/actions';

import { formSteps } from '../../constants';

import PreviousStep from './PreviousStep';
import NextStep from './NextStep';

const StepChangerConnect = ({ current }) => {
  return (
    <React.Fragment>
      {current.step > formSteps.first && <PreviousStep />}
      {current.step < formSteps.third && <NextStep />}
      {current.step === formSteps.third && (
        <button type="submit">Submit</button>
      )}
    </React.Fragment>
  );
};

const mapStateToProps = ({ current }) => ({ current });

const StepChanger = connect(
  mapStateToProps,
  { changeStepAction },
)(StepChangerConnect);

export default StepChanger;
