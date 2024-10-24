import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, Router, RouterProvider,createRoutesFromElements, Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'
// import {githubInfoLoader} from './components/Github/Github.jsx'  -> Use this if you want to use githubInfoLoader function from github.jsx


// ReactRouter uses a prop that is router..but we don't have this router..so we have to learn how to make this router
//To create router we have to import a method createBrowserRouter. We get this method from react-Router
//Within createBrowserRouter function we take an array inside whch we list all objects

// const router = createBrowserRouter([
//   {
//     path: '/',
//     elements: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home/>
//       },
//       {
//         path: "about",
//         element: <About/>
//       },
//       {
//         path: "contact",
//         element: <Contact/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout/>}>
      <Route path = '' element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="user/" element={<User/>}>
        <Route path=':userid' element={<User/>}/>
      </Route>
      <Route path='github' element={<Github/>}/>
      <Route path="*" element={<div>Not Found</div>}/>
    </Route>
  )
)
/* <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github/>}/> 
      
      We use this if we want to use githubInfoLoader
      */


//Above we use asterisk whenever any component is not present and it provides a default.Make sure to add it at the end because these routes are evaluated top to bottom.

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>,
)
