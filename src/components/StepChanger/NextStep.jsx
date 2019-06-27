import React from 'react';
import { connect } from 'react-redux';

import { changeStepAction } from 'store/actions';

const NextStepConnect = ({ step, changeStepAction: setStep, isError }) => (
  <button
    type="button"
    onClick={() => {
      setStep(step + 1);
    }}
    disabled={!!isError}
  >
    NextStep
  </button>
);

const mapStateToProps = ({ current, form }) => ({
  step: current.step,
  isError: form.formStep && form.formStep.syncErrors,
});

const NextStep = connect(
  mapStateToProps,
  { changeStepAction },
)(NextStepConnect);

export default NextStep;
