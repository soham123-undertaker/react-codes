import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h1>Custom App</h1>
    </div>
  )
}
/* At the end of the day bundler converts the above jsx to something like this. */
// const reactElement = {
//   type : 'a',
//   props: {
//       //inside we have the properties of the element
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

//Now since at the end of the day the above jsx gets converted to something like reactElement...can we directly pass reactElement to render...the answer is no because this is not the correct syntax ...But we can definately do something like below

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)

//If we give this directly then no tree is constructed and it is directly rendered


//Now we will see how react expects us to pass values...The below is how react expects us to pass values.
const anotherUser = "chai aur react"
const reactElement2 = React.createElement(
    'a', //First parameter expected is tag
    {
      //2nd parameter expected is an object...it is used to set the properties
      href: 'https://google.com', //These properties depends on the type of tag.. if we had used 'p'..then we would have this part as empty as 'p' doesn't have any attributes

      target: '_blank'
    },
    //third paramter used is a direct text which is to be shown.
    'click me to visit google',
    //at last if any variable or evaluated expression is there then it is injected
    anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <App />
    // <MyApp />
    // reactElement
    reactElement2
)

//Behind the scene react uses a bundler to do behind the scene matching...As we have discussed on custom-react..this bundler converts this above jsx to a function similar to 'customRender' to render. React as itself don't understand jsx so it uses that bundler to create a tree.