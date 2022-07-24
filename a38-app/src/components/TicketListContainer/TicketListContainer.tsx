import { TicketType, Store } from '../../types/types';
import Ticket from '../Ticket/Ticket';
import Footer from '../Footer/Footer';
import './TicketListContainer.scss';
import { useSelector } from "react-redux";

interface Props {
  tickets: TicketType[];
}
const TicketListContainer: React.FC<Props> = props => {
  const selectedTickets = useSelector((state: Store) => state.tickets);

  const { tickets } = props;

  return (
    <>
      <div className="ticket-list-container">
        {tickets.map((ticket, index) => {
          return (
            <Ticket {...ticket} key={index} />
          )
        })}
      </div>
      <Footer enableBack={false} enableNext={selectedTickets.length > 0 ? true : false}/>
    </>
  )
}

export default TicketListContainer;
