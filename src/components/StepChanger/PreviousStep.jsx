import React from 'react';
import { connect } from 'react-redux';

import { changeStepAction } from 'store/actions';

const PreviousStepConnect = ({ step, changeStepAction: setStep }) => (
  <button
    type="button"
    onClick={() => {
      setStep(step - 1);
    }}
  >
    PreviousStep
  </button>
);

const mapStateToProps = ({ current }) => ({ step: current.step });

const PreviousStep = connect(
  mapStateToProps,
  { changeStepAction },
)(PreviousStepConnect);

export default PreviousStep;
