import React, { useState } from 'react';
import 'bootstrap';
import CounterContext from 'components/CounterContext';
import CountButtons from 'components/CountButtons';
import CounterDisplay from 'components/CounterDisplay';

function App() {
  const [currentNumber, setCurrentNumber] = useState(0)

  return (
    <div className="App">
      <CounterContext.Provider value={{
        currentNumber, // Ici on utilise le « short property assignment » ;)
        increment: () => setCurrentNumber(currentNumber + 1),
        decrement: () => setCurrentNumber(currentNumber - 1)
      }}>
        {<>
          <CountButtons />
          <CounterDisplay />
          <p>App > counter: {currentNumber}</p>
        </>}
      </CounterContext.Provider>
    </div>
  );
}

export default App;
