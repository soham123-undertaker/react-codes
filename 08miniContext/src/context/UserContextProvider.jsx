import React,{useState} from "react";
import UserContext from "./UserContext";

//we will be getting children as a prop
const UserContextProvider = ({children})=>{
    const [user,setUser] = React.useState(null)

    //Here whatever we get as children we will render it as it is..It may be a card component..it may be a dashboard within a card...etc. The meaning of writing chilldren is whatever is coming..pass it as it is.
    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}
// The reason we created this userState because this data should be accessible to all the children thats the goal. If we have more data add more things or add more calculations...maybe add a fetch request and whatever comes back from the fetch we want to give acess to all the components.. we do it exactly like this.. Right now we have a variable(user) through which we can acess the data and a method(setUser) through which we can set the data and now we want to pass on this. The way we do this is simply add a 'value' and as an object we simply want to give acess of this user and setUser so that we can read the data as well as write the data in this state
export default UserContextProvider
