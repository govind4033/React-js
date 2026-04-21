import { use } from 'react';
import './App.css'  
import './index.css'
import { useState } from 'react';

function App() {

  let [counter, setCounter] = useState(10);

  const addValue = () => {
    setCounter(counter + 1);
    console.log("incremented value : ", counter);
  }
  const decValue = () => {
    setCounter(counter - 1);
    console.log("decremented value : ", counter);
  }
  return (
    <>
    <h1>hooks hoooooooooooks</h1>
    <h2>counter : {counter}</h2>

    <button onClick={addValue}>inc</button>
    <button onClick={decValue}>dec</button>
    </>
  )
}

export default App
