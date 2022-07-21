import React, { useState, useEffect } from 'react';
import './Wizard.scss';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import Footer from '../Footer/Footer';
import TicketListContainer from '../TicketListContainer/TicketListContainer';
import UserForm from '../UserForm/UserForm';
import { Step, TicketType } from '../../types/types';

const Wizard: React.FC = () => {

  const [activeStep, setActiveStep] = useState(1);
  const steps: Step[] = [{ id: 1, name: 'Jegyek kiválasztása' }, { id: 2, name: 'Kosár' }, { id: 3, name: 'Fizetési adatok megadása' }, { id: 4, name: 'Jegyek küldése/nyomtatása' }]
  const tickets: TicketType[] = [{
    name: 'Super early bird',
    available: 500,
    price: 3000
  },{
    name: 'Early bird',
    available: 100,
    price: 3500
  },{
    name: 'Regular',
    available: 1000,
    price: 4000
  },{
    name: 'VIP',
    available: 20,
    price: 6000
  }]

  useEffect(() => {
    console.log('activeStep', activeStep);
  }, [activeStep])

  return (
    <div className="wizard-container">
      <Breadcrumb activeStep={activeStep} steps={steps}/>
      <div className="wizard-content-container">
        { activeStep === 1 && <TicketListContainer tickets={tickets}/>}
        { activeStep === 3 && <UserForm/>}
      </div>
      <Footer activeStep={activeStep} setActiveStep={setActiveStep} steps={steps}/>
    </div>
  )
}
export default Wizard;
