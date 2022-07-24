import './Breadcrumb.scss';
import { Step } from '../../types/types';

interface Props {
  activeStep: number,
  steps: Step[]
}

const Breadcrumb: React.FC<Props> = props => {
  const { activeStep, steps } = props;

  const getClassName = (activeStep: number, step: number):string => {
    let returnString = 'step-container';
    if(activeStep > step){
      return returnString + ' not-yet-passed';
    } else if (activeStep < step){
      return returnString + ' passed';
    } else if(activeStep === step){
      return returnString + ' active';
    }
    return returnString;
  }

  return (
    <div className="breadcrumb-container">

      {steps.map(step => {
        return (
          <div key={step.id} className={getClassName(activeStep, step.id)}>
            <div className="step-index">
              <span>{step.id}.</span>
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
