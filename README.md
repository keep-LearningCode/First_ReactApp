# Basic_ReactApp

#01_ReactBasicProject

Created a react project using Vite.
Modified the folder structure.

-use first hook -useState()

react...
import { useState } from "react"

function App() {
let [counter, setCounter] =useState(5);

const addition=()=>{
  if(counter <= 20){
setCounter(counter => counter + 1)
}
}

const decrease =()=>{
  if(counter > 0){
    setCounter( counter => counter -1 )
  }
}

const reset = () =>{
  setCounter(0);
} 


  return (
    <>
      <h1>Hello World!</h1>
      <h2>Counter : {counter}</h2>
      <button onClick={addition}>Increase the counter</button>
      <button onClick={decrease}>decrease the counter</button>
      <button onClick={reset}>Reset</button>
    </>
  )
}

export default App





#CustomReact

This folder contains code to create a custom react library using javascript.

Two code approacg has been used. First one is described and second is moduler.


