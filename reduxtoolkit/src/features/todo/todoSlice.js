import {createSlice, nanoid} from '@reduxjs/toolkit'

//Slice is the guy which helps you to create a big object which we export as well and it is responsible for tracking the initial state of the store as well as all of our reducers are also collected here.Slice is just a piece, we have extracted that piece and this is simply the slice which will be linking reducers and  the inistial state of the store. Store needs to know what is the default or the initial state.This is where all the things comes up.

//The initial state can be an array and it can also be an object.
const initialState = {
    todos: [{id: 1, text: 'Hello'}],
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action)=> {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) =>{
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }
    }
})

export const {addTodo, removeTodo} = todoSlice.actions
export default todoSlice.reducer