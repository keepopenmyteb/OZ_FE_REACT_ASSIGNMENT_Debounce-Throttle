import React, { useState, useCallback } from 'react';
import { debounce, throttle } from 'lodash';
import "./App.css";

function App() {
  const [queryDebounce, setQueryDebounce] = useState('');
  const [queryThrottle, setQueryThrottle] = useState('');

  const handleDebounceChange = useCallback(
    debounce((value) => {
      console.log('Debounce 검색 쿼리:', value);
      setQueryDebounce(value);
    }, 500),
    []
  );

  const handleThrottleChange = useCallback(
    throttle((value) => {
      console.log('Throttle 검색 쿼리:', value);
      setQueryThrottle(value);
    }, 1000),
    []
  );


  return (
    <div className="container">
      <h1>
        debounce와 throttle을
        <br />
        이용한 검색
      </h1>
        <div>
        <h2>Debounce</h2>
        <input
          type="text"
          placeholder="Debounce를 이용한 검색..."
          onChange={(e) => handleDebounceChange(e.target.value)}
        />
        <p>검색어: {queryDebounce}</p>
      </div>
      <div>
        <h2>Throttle</h2>
        <input
          type="text"
          placeholder="Throttle을 이용한 검색..."
          onChange={(e) => handleThrottleChange(e.target.value)}
        />
        <p>검색어: {queryThrottle}</p>
      </div>
    </div>
  );
}

export default App;
