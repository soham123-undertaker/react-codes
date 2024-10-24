import { useEffect, useState } from "react";

//custom hooks can also use built-in hooks
function useCurrencyInfo(currency){
    const [data, setData] = useState({}) //If there is a problem so we have taken an empty object so it doesn't crash.
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`).then((res)=>res.json())
        .then((res)=>setData(res[currency]))
    },[currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;