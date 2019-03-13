import React from 'react';
import './App.css';
import useToggle from './useToggle';
import useClock from './useClock';
import useTimer from './useTimer';
import useAsync from './useAsync';

const loadData = async () => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve({data: 'abcdef'})
    }, 3000);
  });
  const response = await promise;
  return response;
};

const App = () => {
  const [value, toggleValue] = useToggle();
  const [clock] = useClock();
  const [timer, start, stop, clear] = useTimer(100);
  const [data, isLoading, error, fetch] = useAsync(loadData);
  return (
    <div className="App">
      <div className="hook">
        <h1>useToggle</h1>
        <button onClick={toggleValue}>toggleValue</button>
        {String(value)}
      </div>
      <div className="hook">
        <h1>useClock</h1>
        {new Date(clock).toLocaleString()}
      </div>
      <div className="hook">
        <h1>useTimer</h1>
        <button onClick={start}>start</button>
        <button onClick={stop}>stop</button>
        <button onClick={clear}>clear</button>
        {timer / 1000} s
      </div>
      <div className="hook">
        <h1>useAsync</h1>
        <button onClick={fetch}>Fetch</button>
        {data || error}
        {isLoading && <span>Loading...</span>}
      </div>

    </div>
  );
}

export default App;
