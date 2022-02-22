import React from 'react';
import visa from '../assets/images/visa.png';
import masterCard from '../assets/images/Mastercard-Logo.png';

const CreditCard = (props) => {
  let cardType = '';
  if (props.type === 'Visa') {
    cardType = visa
  }
  if (props.type === "Master Card") {
      cardType = masterCard
  }

  let cardDots = '•••• •••• •••• •••• ';
  let lastFour = cardDots.concat(
    props.number.slice(props.number.length - 4, props.number.length)
  );

  const logo = {
      width: 50
  }
  const card = {
    backgroundColor: props.bgColor,
    color: props.color,
    width: 200,
    borderRadius: 5,
    padding: 15
  };
  return (
    <div style={card}>
      <img src={cardType} style={logo} alt="card logo"/>
      <div>{lastFour}</div>
      <div>
        <div>
          Expires {props.expirationMonth}/{props.expirationYear}
        </div>
        <div>{props.bank}</div>
        <div>{props.owner}</div>
      </div>
    </div>
  );
};

export default CreditCard;
