import { TicketType } from '../../types/types';

const Ticket: React.FC<TicketType> = props => {

  const { name, available, price } = props;

  return (
    <div>
      <span>{name}</span>
      <span>{available}</span>
      <span>{price}</span>
    </div>
  )
}

export default Ticket;
