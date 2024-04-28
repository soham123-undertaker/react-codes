
import Chai from "./chai"



function App() {
  const username = "chai aur code" //since this is jsx..then we should be able to use js also ...
  return (
    <>
    <h4>Hello Chai</h4>
    <Chai/>
    {/* We inject variable name using curly braces
        This {username} is called evaluated expression. because we cannot write direct javascript here. Only the final evaluated part can be written here..rest all of the expression should be written outside of return(). */}
    <h1>Chai aur react {username}</h1> 
    </>
  )
}

export default App
