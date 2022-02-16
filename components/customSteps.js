import React from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

function CustomStep(props) {
  if (!props.showLastStep) {
    return null;
  } else {
    return (
      <Step>
        <StepLabel>test</StepLabel>
      </Step>
    );
  }
}

export default CustomStep;