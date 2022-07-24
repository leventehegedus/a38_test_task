import { createStore } from "redux";

import {
  ActionTypes,
  ADD_TICKET,
  REMOVE_TICKET
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
    tickets: []
  },
  action: ActionTypes
) {
  switch (action.type) {
    case ADD_TICKET:
      console.log('add')
      return {
        ...state,
        tickets: addTicket(state.tickets, action.payload)
      };
    case REMOVE_TICKET:
      return {
        ...state,
        tickets: removeTicket(state.tickets, action.payload)
      };
    default:
      return state;
  }
}

const store = createStore(ticketReducer);

export default store;
