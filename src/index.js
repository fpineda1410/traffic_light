import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TrafficLight from './traffic_light';
import reportWebVitals from './reportWebVitals';

import "./styles.css";

function App() {
  return (
    <div className="App">
      <TrafficLight initialValue={0} />
      {/* <TrafficLight initialValue={1} /> */}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

reportWebVitals();
