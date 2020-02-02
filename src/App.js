import React from 'react';
import notes from './assets/notes.js';
import './App.scss';

function App() {
  return (
    <div className="page">
      <h1>Create your react xylophone</h1>
      <div className="xylophone">
        {/* I am placeholder buttons, please create me using a map, and with your own component */}
        <button>c</button>
        <button>d1</button>
        <button>e1</button>
        <button>f</button>
        <button>g</button>
        <button>a</button>
        <button>b</button>
        <button>c2</button>
      </div>
      {/* <button>Replay</button> */}
      {/* <button>Clear</button> */}
    </div>
  );
}

export default App;
