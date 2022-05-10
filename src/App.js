import './App.css';
import React from 'react';
import Home from './views/Home/Home';
import Detail from './views/Detail/Detail';

function App() {
  return (
    <div className="App">
      <div>
        <Home />
      </div>
      <div>
        <Detail />
      </div>
    </div>
  );
}

export default App;
