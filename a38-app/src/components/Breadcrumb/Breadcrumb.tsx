import React, { useState } from 'react';
import './Breadcrumb.scss';
import { Step } from '../../types/types';

interface Props {
  activeStep: number,
  steps: Step[]
}

const Breadcrumb: React.FC<Props> = props => {
  const { activeStep, steps } = props;

  return (
    <div className="breadcrumb-container">

      {steps.map(step => {
        return (
          <div key={step.id} className={activeStep === step.id ? 'step-container active' : 'step-container'}>
            <div className="step-index">
              <span>{step.id}</span>
            </div>
            <div className="step-name">
              <span>{step.name}</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}
export default Breadcrumb;
