import { useReducer } from "react"

export default function Reduce(){

    let [a,b]=useReducer((a,action)=>{
            if(action.type==="+"){
                return {count:a.count+1}
            }
            else if(action.type==="-"){
                return {count:a.count-1}
            }
    },{count:0})
    return(
        <>
            <h1>
                {a.count}
            </h1>

            <button onClick={()=>b({type:"+"})}>
                add
            </button>
            <button onClick={()=>b({type:"-"})}>
                minus
            </button>
        </>
    )
}