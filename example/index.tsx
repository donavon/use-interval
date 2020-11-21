import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './styles.css';

import useInterval from '../src';

const Counter = ({ delay = 1000 }) => {
  const [count, setCount] = React.useState(0);

  useInterval(() => {
    setCount(currentCount => currentCount + 1);
  }, delay);

  return <h1>{count}</h1>;
};

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
