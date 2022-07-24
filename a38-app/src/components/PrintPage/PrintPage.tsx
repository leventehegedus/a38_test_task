import { useSelector } from "react-redux";
import { Store } from "../../types/types";

const PrintPage: React.FC = () => {
  const tickets = useSelector((state: Store) => state.tickets);

  return (
    <div>
      {tickets.map((ticket, index) =>  {
        return (
          <div key={index}>
            <span>{ticket.name}</span>
            <span>{ticket.price}</span>
          </div>
        )
      })}
    </div>
  )
}

export default PrintPage;
