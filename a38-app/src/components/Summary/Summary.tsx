import { useEffect } from 'react';
import { TicketType } from '../../types/types';
import { Store } from "../../types/types";
import { useSelector } from "react-redux";

interface Props {
  ticketTypes: TicketType[];
}


const Summary: React.FC<Props> = props => {

  const { ticketTypes } = props;

  const tickets = useSelector((state: Store) => state.tickets);

  useEffect(() => {
    console.log(tickets);
  })

  const renderTicketTypeSummary = (ticket: TicketType) => {
    let ticketTypeLength = tickets.filter(tckt => tckt.name === ticket.name).length;
    console.log('ticketName', ticket.name, 'amount', ticketTypeLength);
    return (
      <div>
        <span>{ticket.name}</span>
        <span>{ticketTypeLength}</span>
      </div>
    );
  };

  return (
    <div>
      { ticketTypes.map((ticket, index) => {
        return renderTicketTypeSummary(ticket);
      }) }
      <div>
        <span>sum</span>
        <span>{ tickets.reduce((prevValue, ticket) => prevValue + ticket.price, 0)}</span>
      </div>
    </div>
  )
}

export default Summary;
