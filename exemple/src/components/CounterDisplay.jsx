import React, { useContext } from 'react';
import CounterContext from 'components/CounterContext';

const CounterDisplay = () => {
    const counter = useContext(CounterContext)

    return (
        <p>CounterDisplay > counter: {counter.currentNumber}</p>
    );
};

export default CounterDisplay;