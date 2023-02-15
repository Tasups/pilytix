import { useState } from "react";

import BasicTable from "./Table";
import OppCard from "./OppCard";
import "./styles.css";

import * as opportunities from "./opportunities.json";

const data = opportunities.default;

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRowId, setSelectedRowId] = useState();
  const [selectedOpp, setSelectedOpp] = useState();

  const toggleCard = () => {
    setIsOpen((prev) => !prev);
  };
  const closeCard = () => {
    setIsOpen(false);
  };
  const selectRow = (id) => {
    setSelectedRowId(id);
    setSelectedOpp(data[selectedRowId - 1]);
    console.log(selectedOpp);
    console.log(selectedOpp.product);
  };

  return (
    <div className="App">
      {isOpen && (
        <OppCard
          closeCard={closeCard}
          id={selectedOpp.oppId}
          name={selectedOpp.oppName}
          salesRepName={selectedOpp.salesRepName}
          amount={selectedOpp.amount}
          product={selectedOpp.product}
        />
      )}
      <div className={isOpen ? "grayed-out" : undefined}>
        <h2>PILYTIX Scored Opportunities</h2>
        <BasicTable
          data={data}
          selectRow={selectRow}
          toggleCard={toggleCard}
        ></BasicTable>
        <h2>{selectedRowId}</h2>
        <h2>{selectedOpp.product}</h2>
        <h2>{selectedOpp.amount}</h2>
      </div>
    </div>
  );
}
