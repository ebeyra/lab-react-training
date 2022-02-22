import React from 'react';

const Random = (props) => {
  const randomNumber = Math.floor(
    Math.random() * (props.max - props.min) + props.min
  );

  return (
    <div>
      <p>
        Random value between {props.min} and {props.max} is {randomNumber}
      </p>
    </div>
  );
};

export default Random;
