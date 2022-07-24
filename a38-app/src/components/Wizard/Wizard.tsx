import './Wizard.scss';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import TicketListContainer from '../TicketListContainer/TicketListContainer';
import Summary from '../Summary/Summary';
import UserForm from '../UserForm/UserForm';
import PrintPage from '../PrintPage/PrintPage';
import { Step, TicketType, Store } from '../../types/types';
import { useSelector } from "react-redux";

const Wizard: React.FC = () => {

  const activeStep = useSelector((state: Store) => state.step);

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

  return (
    <div className="wizard-container">
      <Breadcrumb activeStep={activeStep} steps={steps}/>
      <div className="wizard-content-container">
        { activeStep === 1 && <TicketListContainer tickets={tickets}/>}
        { activeStep === 2 && <Summary ticketTypes={tickets}/>}
        { activeStep === 3 && <UserForm/>}
        { activeStep === 4 && <PrintPage/>}
      </div>
    </div>
  )
}
export default Wizard;
