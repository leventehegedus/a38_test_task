import { createStore } from "redux";
import { toast } from "react-toastify";

import {
  ActionTypes,
  ADD_TICKET,
  REMOVE_TICKET,
  STEP_TO_PAGE
} from "./actions";
import { Store, TicketType } from "../types/types";

// Standard interface and functions
const addTicket = (tickets: TicketType[], ticket: TicketType): TicketType[] => [
  ...tickets, ticket
];

const removeTicket = (tickets: TicketType[], ticketName: string): TicketType[] =>
  tickets.filter((ticket) => ticket.name !== ticketName);


// Redux implementation
function ticketReducer(
  state: Store = {
    tickets: [],
    step: 1
  },
  action: ActionTypes
) {
  switch (action.type) {
    case ADD_TICKET:
      toast.success("Ticket added to cart");
      return {
        ...state,
        tickets: addTicket(state.tickets, action.payload)
      };
    case REMOVE_TICKET:
    toast.success("All of the tickets with this type has been removed");
      return {
        ...state,
        tickets: removeTicket(state.tickets, action.payload)
      };
    case STEP_TO_PAGE:
      return {
        ...state,
        step: action.payload
      };
    default:
      return state;
  }
}

const store = createStore(ticketReducer);

export default store;
