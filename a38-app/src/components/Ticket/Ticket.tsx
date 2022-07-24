import { useEffect } from 'react';
import { TicketType } from '../../types/types';
import { addTicket, removeTicket } from "../../store/actions";
import { Store } from "../../types/types";
import { useSelector, useDispatch } from "react-redux";

const Ticket: React.FC<TicketType> = props => {
  const tickets = useSelector((state: Store) => state.tickets);
   const dispatch = useDispatch();

  const { name, available, price } = props;

  useEffect(() => {
    console.log(tickets);
  })

  return (
    <div>
      <span>{name}</span>
      <span>{available}</span>
      <span>{price}</span>
      <span onClick = {() => dispatch(addTicket(props))}>kosárba</span>
      <span onClick = {() => dispatch(removeTicket(name))}>törlés</span>
    </div>
  )
}

export default Ticket;
