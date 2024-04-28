import { useState } from 'react' //from here the useState hook comes
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 5;

  //useState hook is responsible to propagate the changes made in the values to the UI.
  //from useState we obtain 2 things in the form of array._th index value is simply counter and the second one is a function (it can have any name) which is responsible for updating the first variable on 0th index.
  let [counter,setCounter] = useState(15)//we can provide anything as dafult value such as true,false,{},[],''..etc but not functions
  //counter will have a default value of 15 ...what we have provided


  const addvalue = ()=>{
    // counter = counter+1;//although the value is updated here but it is not reflected on the screen..because UI is controlled by react..

    setCounter(counter+1) //this function is used to update the value.

    console.log("clicked", counter);
  }

  const removeValue = ()=>{
    if(counter>0){
    setCounter(counter-1);
    }
  }

  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter value: {counter}</h2>

    <button onClick={addvalue}>Add value {counter}</button>
    <br />
    <button onClick={removeValue}>remove value {counter}</button>

    <h4>footer {counter}</h4>
    </>
  )
}

export default App
