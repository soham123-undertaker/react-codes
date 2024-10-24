import React from 'react'

// each component has access to props
function Card({username,btnText="visit me"}) {
  //props is an object
  //We can asign default value using = sign..
    //another ayntax:- instead of taking the object we can directly take the destructured value i.e.. function Card({username})
    console.log("props" , props); //initially this props is an empty object...but whatever value we have passed on the jsx call on App.jsx appears here.
    console.log(props.username);
    //If we had used props then we will use props.username
    /*If we have taken the destructured object 
    i.e if we have used function Card({username}) then we will use username only...
    console.log(username)*/
  return (
    <div class="relative h-[400px] w-[300px] rounded-md mt-4">
    <img
      src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
      alt="AirMax Pro"
      class="z-0 h-full w-full rounded-md object-cover"
    />
    <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
    <div class="absolute bottom-4 left-4 text-left">
      <h1 class="text-lg font-semibold text-white"> {username}</h1>
      {/* or we could have used props.username...if we had used porps */}
      <p class="mt-2 text-sm text-gray-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
        debitis?
      </p>
      <button class="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
       {btnText || "visit me"}
      </button>
    </div>
  </div>
  )
}

export default Card