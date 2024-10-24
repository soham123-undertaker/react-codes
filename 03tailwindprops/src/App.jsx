import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username: "Soham",
    age: 21
  }

  let newArr = [1,2,3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind test</h1>
      <Card username="chaiaurcode" some = {myObj} btnText={Habu}/> 
      {/* We cannot pass direct objects or arrays but can pass them by passing their references */}
    </>
  )
}

export default App
