import { TicketType } from "../types/types";

export const ADD_TICKET = "ADD_TICKET";
export const REMOVE_TICKET = "REMOVE_TICKET";
export const STEP_TO_PAGE = "STEP_TO_PAGE";

export type ActionTypes =
  | { type: typeof ADD_TICKET; payload: TicketType }
  | { type: typeof REMOVE_TICKET; payload: string }
  | { type: typeof STEP_TO_PAGE; payload: number };

export const addTicket = (ticket: TicketType): ActionTypes => ({
  type: ADD_TICKET,
  payload: ticket
});
export const removeTicket = (ticketName: string): ActionTypes => ({
  type: REMOVE_TICKET,
  payload: ticketName
});

export const stepToPage = (step: number): ActionTypes => ({
  type: STEP_TO_PAGE,
  payload: step
});
