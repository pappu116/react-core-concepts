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
        <p>similler Look Style</p>
        {/* similear look style */}
        <Person></Person>
        <Person></Person>
        <Person></Person>
        <Person></Person>
      </header>
    </div>
  );
}

function Person() {
  var style={
    border:'2px solid yellow',
    margin:'10px'
  }
  return(
    <div style={style}>
       <h1>Name:Pappu Hasan</h1>
       <h2>status: Learn React</h2>
    </div>
  )
}

export default App;
