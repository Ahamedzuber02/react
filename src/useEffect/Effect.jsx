import { useEffect, useRef, useState } from "react"

export default function Effect(){
    let [count,setCount]=useState(0);
    let ref=useRef(0)
    useEffect(()=>{
        document.title="page rendered:"+count;
        fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
      ref.current+=1
    },[count])
    return(
        <>
            <h2>
               usestate {count}
                <br />
              ref  {ref.current}
            </h2>
            <button onClick={()=>setCount(count+1)}>
                add
            </button>
        </>
    )
}