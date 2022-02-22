import React from 'react';

const BoxColor = (props) => {
  const divStyle = {
    backgroundColor: 'rgb(' + props.r + ',' + props.g + ',' + props.b + ')',
    height: 50,
    width: 150,
    color: 'black',
    border: '1px solid black',
    textAlign: 'center',
  };
  return (
    <div style={divStyle}>
      <p>
        rgb({props.r},{props.g},{props.b})
      </p>
    </div>
  );
};

export default BoxColor;
