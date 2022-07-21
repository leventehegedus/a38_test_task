import React from 'react';
import './Footer.scss';
import { Step } from '../../types/types';

interface Props {
  activeStep: number,
  setActiveStep: Function,
  steps: Step[];
}

const Footer: React.FC<Props> = props => {

  const { activeStep, setActiveStep, steps } = props;

  const handleSteps = (step: number, direction: string): void =>  {
    if (direction === 'next') {
      //      console.log('step', step, 'direction', direction);
      if (step === steps.length) {
        console.log('a')
        setActiveStep(1);
      } else {
        console.log('b')
        setActiveStep(step + 1);
      }
    } else if (direction === 'prev') {
      //    console.log('step', step, 'direction', direction);
      if (step !== 1) {
        console.log('c')
        setActiveStep(step - 1);
      }
    }
  }


  return (
    <div>
      <button onClick={() =>  handleSteps(activeStep, 'prev')}>prev</button>
      <button onClick={() =>  handleSteps(activeStep, 'next')}>next</button>
    </div>
  )
}
export default Footer;
