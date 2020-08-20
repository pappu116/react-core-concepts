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
const nayok =['ami', 'mai', 'sai', 'lai']
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
        {/* silimer data style */}
        <p>Similer data Style dynamik </p>
        <Persondata name="Karim" job="krisok"></Persondata>
        <Persondata name="kasem" job="hal-chas kore"></Persondata>
        <Persondata name="jamil" job="chagol chorai"></Persondata>
        <Persondata name="josim" job="wang wang"></Persondata> 
        {/* if u want use arry thats posible just use under system
        {/* <Persondata name={nayok[0]}></Persondata>
        <Persondata name={nayok[1]} job="hal-chas kore"></Persondata>
        <Persondata name={nayok[2]}job="chagol chorai"></Persondata>
        <Persondata name={nayok[3]} job="wang wang"></Persondata> */}
      </header>
    </div>
  );
}
// silimer look style
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
// similer data style

function Persondata(props) {
  const style={
    border:'2px solid yellow',
    margin:'10px',
    width:'400px'
  }
  return  <div style={style}>
    <h1>Name:{props.name}</h1>
    <h3>Profetion:{props.job}</h3>
  </div>
}

export default App;
