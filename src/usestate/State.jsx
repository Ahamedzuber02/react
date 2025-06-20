import { useState } from "react"

export default function StateFun(){

    // const [state,setState]=useState("jhg")
    let [name,setName]=useState('Zuber')
    let [count,setCount]=useState(0)
    return(
        <>
            <h4 onClick={()=>setName("Zuber Ahamed")}>
                {name}
            </h4>

            <h1>
                {count}
            </h1>

            <button onClick={()=>setCount(count+1)}>
                Add
            </button>
            <button onClick={()=>setCount(count-1)}>
                Delete
            </button>
            <button onClick={()=>setCount(0)}>reset</button>
        </>
    )
}