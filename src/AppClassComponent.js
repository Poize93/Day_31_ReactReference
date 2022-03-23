import React, { createRef } from 'react';
import Counter from './Counter';
class AppClassComponent extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const reference = createRef();
    const handleIncrementFromApp = () => {
      reference.current.handleIncrement();
    };

    const handleDecrementFromApp = () => {
      reference.current.handleDecrement();
    };
    const references = createRef();
    return (
      <>
        <h3>Class Component Parent</h3>
        <button onClick={handleIncrementFromApp}>
          Increment from APP
        </button>{' '}
        &nbsp;
        <button onClick={handleDecrementFromApp}>Decrement from APP</button>
        <Counter ref={reference} />
      </>
    );
  }
}

export default AppClassComponent;
