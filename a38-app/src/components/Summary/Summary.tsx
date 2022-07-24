import { useEffect } from 'react';
import { TicketType } from '../../types/types';
import { Store } from "../../types/types";
import { useSelector } from "react-redux";
import './Summary.scss';
import Footer from '../Footer/Footer';

interface Props {
  ticketTypes: TicketType[];
}


const Summary: React.FC<Props> = props => {

  const { ticketTypes } = props;

  const tickets = useSelector((state: Store) => state.tickets);

  useEffect(() =>  {
    console.log(tickets);
  })

  const renderTicketTypeSummary = (ticket: TicketType, index: number) =>  {
    let ticketTypeLength = tickets.filter(tckt =>  tckt.name === ticket.name).length;
    if (ticketTypeLength > 0) {
      return (
        <div className="ticket-container" key={index}>
          <div className="ticket-details">
            <div className="title-container">
              <div className="ticket">
                {ticket.name}
              </div>
            </div>
            <div className="price">{ticket.price} Ft</div>
          </div>
          <div className="count">
            <span>{ticketTypeLength} </span><span>{ticketTypeLength >  1 ? 'tickets' : 'ticket'}</span>
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      <div className="ticket-list-container">
        {ticketTypes.map((ticket, index) =>  {
          return renderTicketTypeSummary(ticket, index);
        })}
      </div>
      <div className="sum-container">
        <span>Sum:</span>
        <span>{tickets.reduce((prevValue, ticket) =>  prevValue + ticket.price, 0)} Ft</span>
      </div>
      <Footer enableBack={true} enableNext={true}/>
    </div>
  )
}

export default Summary;
