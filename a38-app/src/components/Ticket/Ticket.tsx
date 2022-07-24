import { TicketType } from '../../types/types';
import { addTicket, removeTicket } from "../../store/actions";
import { useDispatch } from "react-redux";
import { FiShoppingCart, FiTrash } from 'react-icons/fi';
import './Ticket.scss';

const Ticket: React.FC<TicketType> = props => {
  const dispatch = useDispatch();

  const { name, available, price } = props;

  return (
    <div className="ticket-container">
      <div className="ticket-details">
        <div className="title-container">
          <div className="ticket">
            {name}
          </div>
          <div className="available">Available tickets: ({available})</div>
        </div>
        <div className="price">{price} Ft</div>
      </div>
      <div className="buttons-container">
        <div className="button" onClick={() => dispatch(addTicket(props))}>
          <FiShoppingCart />
        </div>
        <div className="button" onClick={() => dispatch(removeTicket(name))}>
          <FiTrash />
        </div>
      </div>
    </div>
  )
}

export default Ticket;
