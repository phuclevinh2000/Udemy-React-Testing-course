import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [error, setError] = useState(false);

  return (
    <div data-test='component-app'>
      <h1 data-test='counter-display'>
        The counter is currently&nbsp;
        <span data-test='count'>{count}</span>
      </h1>
      {error && <h1 data-test='error-message'>Can not go under 0</h1>}
      <button
        data-test='increment-button'
        onClick={() => {
          if (error) {
            setError(false);
          }
          setCount(count + 1);
        }}
      >
        Increment counter
      </button>
      <button
        data-test='decrease-button'
        onClick={() => {
          if (count > 0) {
            setCount(count - 1);
          } else {
            setError(true);
          }
        }}
      >
        Decrease counter
      </button>
    </div>
  );
}

export default App;
