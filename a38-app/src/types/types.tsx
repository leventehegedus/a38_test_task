export interface Step {
  id: number;
  name: string;
}

export interface TicketType {
  name: string,
  available: number,
  price: number
}

export interface User {
  name: string,
  email: string
}
