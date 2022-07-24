import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { Store } from "../../types/types";
import './PrintPage.scss';
import Footer from '../Footer/Footer';

const PrintPage: React.FC = () => {
  const tickets = useSelector((state: Store) => state.tickets);
  const [selectedTickets, setSelectedTickets] = useState<Number[]>([]);
  const [printedTickets, setPrintedTickets] = useState<Number[]>([]);
  const [sentTickets, setSentTickets] = useState<Number[]>([]);
  const [isAllSelected, setAllSelected] = useState<boolean>(false);

  useEffect(() => {
    let helperVariable: boolean = true;
    for(let i = 0; i < tickets.length; i++){
      if(!printedTickets.includes(i) && !sentTickets.includes(i)){
        helperVariable = false;
      }
    }
    setAllSelected(helperVariable);
  },[sentTickets, printedTickets])

  const toggleSelectedTickets = (ticketIndex: number): void =>  {
    if (!selectedTickets.includes(ticketIndex)) {
      let helperArray: Number[] = [...selectedTickets, ticketIndex];
      setSelectedTickets(helperArray);
    } else {
      const index = selectedTickets.indexOf(ticketIndex);
      let helperArray: Number[] = [...selectedTickets];
      if (index > -1) {
        helperArray.splice(index, 1);
      }
      setSelectedTickets(helperArray);
    }
  }

  const getClassName = (index: number): string =>  {
    let className = "";
    if(selectedTickets.includes(index)){
      className = className + 'highlighted ';
    }
    if(printedTickets.includes(index)){
      className = className + 'printed ';
    }
    if(sentTickets.includes(index)){
      className = className + 'sent ';
    }
    return className;
  }

  const highlightAll = () => {
    if(selectedTickets.length > 0){
      setSelectedTickets([]);
    } else {
      let helperArray: Number[] = [];
      for(let i = 0; i < tickets.length; i++){
        helperArray.push(i);
      }
      setSelectedTickets(helperArray);
    }
  }

  const printTicket = () => {
    setPrintedTickets([...selectedTickets, ...printedTickets]);
  }

  const sendTicket = () => {
    setSentTickets([...selectedTickets, ...sentTickets]);
  }

  return (
    <div>
      <div onClick={() => highlightAll()}>highlight all</div>
      <div onClick={() => printTicket()}>print</div>
      <div onClick={() => sendTicket()}>send</div>
      <div>
      isAllSelected: {isAllSelected ? 'true' : 'false'}
      </div>
      {tickets.map((ticket, index) => {
        return (
          <div key={index} onClick={() =>  toggleSelectedTickets(index)} className={"ticket-tile " + getClassName(index)}>
            <span>{ticket.name}</span>
            <span>{ticket.price}</span>
          </div>
        )
      })}
      <Footer enableBack={false} enableNext={isAllSelected}/>
    </div>
  )
}

export default PrintPage;
