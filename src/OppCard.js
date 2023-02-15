import * as React from "react";

import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import "./OppCard.css";

export default function OppCard(props) {
  const { closeCard, id, name, salesRepName, amount, product } = props;

  function handleClick(event) {
    event.preventDefault();
    closeCard();
  }
  // id={selectedOpp.oppId}
  // name={selectedOpp.oppName}
  // salesRepName={selectedOpp.salesRepName}
  // amount={selectedOpp.amount}
  // product={selectedOpp.product}

  return (
    <Card className="card">
      <h2>{name}</h2>
      <p>{id}</p>
      <p>{salesRepName}</p>
      <p>{amount}</p>
      <p>{product}</p>
      <Button
        variant="contained"
        type="button"
        onClick={(event) => handleClick(event)}
      >
        CLOSE
      </Button>
    </Card>
  );
}
