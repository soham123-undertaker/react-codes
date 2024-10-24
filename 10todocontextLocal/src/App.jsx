import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './contexts'
import { TodoItem } from './components'

function App() {

  const [todos, setTodos] = useState([])

  const addTodo = (todo)=>{
    setTodos((prev)=>[{id:Date.now(), ...todo}, ...prev])
  }

    const updatedTodo = (id, todo)=>{
      setTodos((prev)=> prev.map((prevTodo)=>(prevTodo.id === id ? todo : prevTodo)))
    }

    const deleteTodo = (id)=>{
      setTodos((prev) => prev.filter((todo)=> todo.id !== id))
    }

    const toggleComplete = (id)=>{
      setTodos((prev)=> prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))
    }

    //localStorage is acessible in react because we are still in browser...However if we talk about server side rendering then localStorage would not function.
    //In localStorage we have two functions 'setItem' to set an item and 'getItem' to get an item.
    //Also note that in localStorage everything gets stored in strings.

    useEffect(()=>{
      const todos = JSON.parse(localStorage.getItem("todos"))

      if(todos && todos.length>0){
        setTodos(todos)
      }
    },[])

    //In setItem we need to provide key and value.
    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos))
    },[todos])

  return (
    <TodoProvider value={{todos, addTodo, updatedTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {todos.map((todo)=>(
                          <div key={todo.id}
                            className='w-full'
                          >
                            <TodoItem todo={todo}/>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
