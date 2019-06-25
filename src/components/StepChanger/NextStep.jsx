import React from 'react';
import { connect } from 'react-redux';

import { changeStepAction } from 'store/actions';

const NextStepConnect = ({ step, changeStepAction: setStep }) => (
  <button
    type="button"
    onClick={() => {
      setStep(step + 1);
    }}
  >
    NextStep
  </button>
);

const mapStateToProps = ({ current }) => ({ step: current.step });

const NextStep = connect(
  mapStateToProps,
  { changeStepAction },
)(NextStepConnect);

export default NextStep;
