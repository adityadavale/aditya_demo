import './App.css';
import { IncrementCounter, Display } from './IncrementComponent';
import { useState } from "react";

function App() {
  var [counter, updateCounter] = useState(0);

  var incrementCounterFunction = function () {
    updateCounter(counter + 1);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Test Inputs And Functions</h1>
      </header>
      <IncrementCounter onClickFunction={incrementCounterFunction} label='IncrementBtn' />
      <Display counterText={counter} />
    </div>
  );
}

export default App;
