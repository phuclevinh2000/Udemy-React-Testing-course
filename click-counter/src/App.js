import React from 'react';
import './App.css';

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div data-test='component-app'>
      <h1>App</h1>
    </div>
  );
}

export default App;
