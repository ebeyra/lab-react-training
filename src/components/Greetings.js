import React from 'react';

const Greetings = (props) => {
  switch (props.lang) {
    case 'en':
      return (
        <div>
          <p>Hello {props.children}</p>
        </div>
      );
    case 'de':
      return (
        <div>
          <p>Hallo {props.children}</p>
        </div>
      );
    case 'es':
      return (
        <div>
          <p>Hola {props.children}</p>
        </div>
      );
    case 'fr':
      return (
        <div>
          <p>Bonjour {props.children}</p>
        </div>
      );
  }
};

export default Greetings;
