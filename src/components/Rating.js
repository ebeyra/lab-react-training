import React from 'react';

const Rating = (props) => {
  const rate = Math.round(props.children);
  switch (rate) {
    case 0:
      return (
        <div>
          <p>☆☆☆☆☆</p>
        </div>
      );
    case 1:
      return (
        <div>
          <p>★☆☆☆☆</p>
        </div>
      );
    case 2:
      return (
        <div>
          <p>★★☆☆☆</p>
        </div>
      );
    case 3:
      return (
        <div>
          <p>★★★☆☆</p>
        </div>
      );
    case 4:
      return (
        <div>
          <p>★★★★☆</p>
        </div>
      );
    case 5:
      return (
        <div>
          <p>★★★★★</p>
        </div>
      );
    default:
      return (
        <div>
          <p>☆☆☆☆☆</p>
        </div>
      );
  }
};

export default Rating;
