import React, { useRef } from 'react'; ///here we are using useRef , which is only possible in Function . For class we can use CreateRef.
import './style.css';
import Counter from './Counter';
///functionality from a Child Component in Parent

export default function App() {
  const reference = useRef();
  const handleIncrementFromApp = () => {
    reference.current.handleIncrement();
  };

  const handleDecrementFromApp = () => {
    reference.current.handleDecrement();
  };

  return (
    <div>
      <h3>App Component</h3>
      <button onClick={handleIncrementFromApp}>Increment from APP</button>{' '}
      &nbsp;
      <button onClick={handleDecrementFromApp}>Decrement from APP</button>
      <Counter ref={reference} />
    </div>
  );
}
