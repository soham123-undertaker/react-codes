import React from 'react'
import { useSelector } from 'react-redux'

function Todos() {
    //To read data we use useSelector(). It has a callback which has access to state. Redux injects it behind the scenes.
    useSelector((state)=>{state.todos})
  return (
    <>
    
    </>
  )
}

export default Todos