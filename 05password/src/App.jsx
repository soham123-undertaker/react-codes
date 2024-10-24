import { useState, useCallback, useEffect, useRef} from 'react'

function App() {
  const [length,setLength] = useState(8)
  const [numAllowed, setnumAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password,setpassword] = useState("")

  //useRef hook
  //We need to use useRef hook on a variable
  const passwordRef = useRef(null) //null is default value.

  // useCallback hook is used to optimise the function so that it can run in an optimized manner whenever any call may occur due to its dependencies.
  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if(numAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()[]{}~"

    for(let i = 1;i<=length;i++){
      let char = Math.floor(Math.random()*str.length + 1);
      pass += str.charAt(char);
    }

    setpassword(pass)

  },[length,numAllowed,charAllowed])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    //? is optional select.If the password is empty then it will not select
    //passwordRef has access to the password text inside the textbox and we select its current value using current.select().
    // passwordRef.current?.setSelectionRange(0,3); //This is used to select range.
    window.navigator.clipboard.writeText(password)
    //In core react we have access to window object.Inside window we have navigator and then we use .clipboard.writeText to select 
  },[password])

 //useEffect hook calls the function whenever any change in its dependencies occur.

  useEffect(()=>{
    passwordGenerator()
  },[length,numAllowed,charAllowed])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 py-2 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='password' readOnly ref={passwordRef}/>
          <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}}/>
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={numAllowed} id='numberInput' onChange={()=>{
              setnumAllowed((prev)=> !prev);
            }} />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={charAllowed} id='charInput' onChange={()=>{
              setcharAllowed((prev)=> !prev);
            }} />
            {/* these setcharAllowed/setnumAllowed functions can take a callback to propagate the events..it have the access of the previous state.If we directly do setcharAllowed(true) then it will always remain true. */}
            <label htmlFor="charInput">Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
