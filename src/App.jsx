import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  
  function add() {
    setCount(count + 1);
  }

  function decrease() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function reset() {
    setCount(0);
  }

  return (
    <body>
    <div className="container">
      <span className="title"> Count </span>
      <span className="result"> {count} </span>

     <div className="button"> 
      <button className="decrease" onClick={decrease}> Decrease </button>
      <button className="reset" onClick={reset}> Reset </button>
      <button className="add" onClick={add}> Add </button>
    </div>

    </div>

    </body>
  )
}

export default App;