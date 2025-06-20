import { useLayoutEffect, useState } from "react"
import useCount from "./useCounter"

export default function Layout(){
    let [count,setCount]=useState(0)
    useLayoutEffect(()=>{
        document.title="page rendered:"+count
    },[count])

    let [a,b]=useCount(0)
    return(
        <> 
            <h1>
                {count}
            </h1>   
            <button onClick={()=>setCount(count+1)}>
                click
            </button>    

        <h1>
            Custom hook {a}
        </h1>
            <button onClick={()=>b()}>
                Custom hook</button> 
        </>
    )
}