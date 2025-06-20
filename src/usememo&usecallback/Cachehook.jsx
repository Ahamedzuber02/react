import { useCallback, useMemo, useState } from "react"

export default function Cachehook(){
    let [count,setCount]=useState(0)
    let memovalue=useMemo(()=>{
        return count*250
    },[count])

    let call=useCallback((a,b)=>{
        return a*b
    },[count])
    return(
        <>
         <button onClick={()=>setCount(count+1)}>
            click
         </button>

         <h1>
            {memovalue}
            <br />
            call back {call(20,20)}
         </h1>
        </>
    )
}