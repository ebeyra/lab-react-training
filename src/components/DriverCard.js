import React from 'react';
import Rating from './Rating';

const DriverCard = (props) => {
  const imageStyle = {
    width: 100,
    height: 100,
    borderRadius: 100,
    marginTop: 20,
    marginRight: 20,
  };
  const borderStyle = {
    backgroundColor: 'cornflowerblue',
    display: 'flex',
    flexDirection: 'row',
    color: 'white',
    padding: 20,
    width: 400,
    borderRadius: 20,
    marginBottom: 10,
  };
  return (
    <div style={borderStyle}>
      <div>
        <img src={props.img} alt="profile image" style={imageStyle} />
      </div>
      <div>
        <h2>{props.name}</h2>
        <p>
          <Rating children={props.rating} />
        </p>
        <p>
          {props.car.model} - {props.car.licensePlate}
        </p>
      </div>
    </div>
  );
};

export default DriverCard;
