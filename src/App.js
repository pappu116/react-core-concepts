import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  var persone = {
      name:"Dr. MAhfuz",
      job: "singer"
  }
  var persone2 = {
    name:"eva rahman",
    job: "kokil konthi"
}
var style={
  color:'red',
  backgroundColor:'yellow'
}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done mama <code>src/App.js</code> and save to reload.
        </p>
  <h1 className="" style={style}>My Heading:{persone.name + " " + persone.job}</h1>
  <h2 style={{backgroundColor:'skyblue', color:'#333'}}>singer: {persone2.name + " " + persone2.job}</h2>
        <p>my frist react paragrah</p>
      </header>
    </div>
  );
}

export default App;
