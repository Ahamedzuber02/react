import { useDispatch, useSelector } from "react-redux"
import { increment } from "./slicer"

export default function Demoredux(){
    let a=useSelector(state=>state)
    let d=useDispatch()
    console.log(a)
    return(
        <>
            <h4>
                {a.count}
            </h4>
            <button onClick={()=>{
                d(increment())
            }}>
                Increment
            </button>
        </>
    )
}