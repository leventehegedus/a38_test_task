import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { Store } from "../../types/types";
import './PrintPage.scss';
import Footer from '../Footer/Footer';
import { FiMail, FiPrinter } from 'react-icons/fi';

const PrintPage: React.FC = () => {
  const tickets = useSelector((state: Store) => state.tickets);
  const [selectedTickets, setSelectedTickets] = useState<Number[]>([]);
  const [printedTickets, setPrintedTickets] = useState<Number[]>([]);
  const [sentTickets, setSentTickets] = useState<Number[]>([]);
  const [isAllSelected, setAllSelected] = useState<boolean>(false);

  useEffect(() => {
    let helperVariable: boolean = true;
    for (let i = 0; i < tickets.length; i++) {
      if (!printedTickets.includes(i) && !sentTickets.includes(i)) {
        helperVariable = false;
      }
    }
    setAllSelected(helperVariable);
  }, [sentTickets, printedTickets])

  const toggleSelectedTickets = (ticketIndex: number): void => {
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

  const getClassName = (index: number): string => {
    let className = "";
    if (selectedTickets.includes(index)) {
      className = className + 'highlighted ';
    }
    if (printedTickets.includes(index)) {
      className = className + 'printed ';
    }
    if (sentTickets.includes(index)) {
      className = className + 'sent ';
    }
    return className;
  }

  const highlightAll = () =>  {
    if (selectedTickets.length >  0) {
      setSelectedTickets([]);
    } else {
      let helperArray: Number[] = [];
      for (let i = 0; i < tickets.length; i++) {
        helperArray.push(i);
      }
      setSelectedTickets(helperArray);
    }
  }

  const printTicket = () =>  {
    setPrintedTickets([...selectedTickets, ...printedTickets]);
    setSelectedTickets([]);
  }

  const sendTicket = () => {
    setSentTickets([...selectedTickets, ...sentTickets]);
    setSelectedTickets([]);
  }

  return (
    <div>
      <div className="print-page-buttons">
        <button onClick={() => highlightAll()}>{selectedTickets.length > 0 ? 'uncheck all' : 'check all'}</button>
        <button onClick={() => printTicket()}>print</button>
        <button onClick={() => sendTicket()}>send</button>
      </div>
      <div className="ticket-tile-container">
        {tickets.sort((a,b) => a.name.localeCompare(b.name)).map((ticket, index) => {
          return (
            <div key={index} onClick={() => toggleSelectedTickets(index)} className={"ticket-tile " + getClassName(index)}>
              <div className="title"><span>{ticket.name}</span></div>
              <div className="price"><span>{ticket.price} Ft</span></div>
              <div className="icon print">
                <FiPrinter />
              </div>
              <div className="icon sent">
                <FiMail />
              </div>
            </div>
          )
        })}
      </div>
      <Footer enableBack={false} enableNext={isAllSelected} />
    </div>
  )
}

export default PrintPage;
