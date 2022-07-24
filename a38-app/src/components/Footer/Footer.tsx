import React from 'react';
import './Footer.scss';
import { Store } from '../../types/types';
import { stepToPage, resetTickets } from "../../store/actions";
import { useSelector, useDispatch } from "react-redux";

interface Props {
  enableBack: boolean,
  enableNext: boolean
}

const Footer: React.FC<Props> = props => {

  const { enableBack, enableNext } = props;

  const activeStep = useSelector((state: Store) => state.step);
  const dispatch = useDispatch();

  const handleSteps = (step: number, direction: string): void => {
    if (direction === 'next') {
      if (enableNext) {
        if(activeStep === 4){
          dispatch(stepToPage(1));
          dispatch(resetTickets());
        } else {
          dispatch(stepToPage(step + 1));
        }
      }
    } else if (direction === 'prev') {
      if (enableBack) {
        dispatch(stepToPage(step - 1));
      }
    }
  }


  return (
    <div className="footer-container">
      <button disabled={!enableBack} onClick={() => handleSteps(activeStep, 'prev')}>prev</button>
      <button disabled={!enableNext} onClick={() => handleSteps(activeStep, 'next')}>next</button>
    </div>
  )
}
export default Footer;
