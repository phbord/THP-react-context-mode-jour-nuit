import React, { useContext } from 'react';
import CounterContext from 'components/CounterContext';

const CountButtons = () => {
    const counter = useContext(CounterContext)
  
    return (
      <div className="CountButtons">
        <button onClick={counter.increment} className="btn-primary me-2">+</button>
        <button onClick={counter.decrement} className="btn-primary me-5">-</button>
        <p>CountButtons > counter: {counter.currentNumber}</p>
      </div>
    );
  };
  
  export default CountButtons;