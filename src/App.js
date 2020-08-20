import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const nayoks =['razzak', 'sazzak','riaz','bapparaz','mutia','chutia']
  
  
const products =[
  {name:'Photoshope', price:'60.99'},
  {name:'ilistrator', price:'50.99'},
  {name:'PDF Reader', price : '5.99'}
]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done mama <code>src/App.js</code> and save to reload.
        </p>
        <Counter></Counter>
        <Todos></Todos>
        <ul>
         {
           nayoks.map(nayok => <li>{nayok}</li>)
         }

      {
        products.map(product=> <li>{product.name}</li>)
      }
      </ul>
         {/* functional product view */}
      {
        products.map(pd =><Product product={pd}></Product>)
      }
      {/* manualy product view style */}
      <Product product={products[0]}></Product>
      <Product product={products[1]}></Product>
      <Product product={products[2]}></Product>

      {/* user-area */}
      
      </header>
    </div>
  );
}

function Product(props) {
  const ProductStyle={
    border:'1px solid gray',
    width:'200px',
    height:'200px',
    float:'left',
    backgroundColor:'lightgray',
    borderRadius:'5px',
  }
  const {name, price} = props.product
  return(
    <div style={ProductStyle}>
      <h3>{name}</h3>
      <h4>{price}</h4>
      <button>Buy Now</button>
    </div>
  )
}

function Counter() {
  const [count, setCount]=useState(10);
  // const handleIncrease=() =>{
  //   const newCount= count  +1;
  //   setCount(newCount)
  // }

  //another style 
  const handleIncrease=() =>setCount(count +1)
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={()=>setCount(count-1)}>Dicrease</button>
      <button onClick={handleIncrease}>increase</button>
    </div>
  )
}
//user style-area

function Todos() {
  const [todos, setTodos] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => setTodos(data));
  
  })
  
  return(
    <div>
      <h3>Daynamic Todos: {todos.length}</h3>
      <ul>
      {
        todos.map(todo => <li>{todo.title}<br></br>{todo.completed}</li>)
        }
      </ul>
    </div>
  )
}
export default App;
