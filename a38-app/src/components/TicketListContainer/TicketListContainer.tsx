import { TicketType } from '../../types/types';
import Ticket from '../Ticket/Ticket';

interface Props {
  tickets: TicketType[];
}
const TicketListContainer: React.FC<Props> = props => {

  const { tickets } = props;

  return (
    <div>
      { tickets.map(ticket => {
        return (
          <Ticket {...ticket}/>
        )
      })}
    </div>
  )
}

export default TicketListContainer;
