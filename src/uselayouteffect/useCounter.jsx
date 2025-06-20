import { useState } from "react"

export default function useCount(inital){
    let [num,setNum]=useState(inital)
    const increment=()=>{
        setNum(num+1)
    }
    return [num,increment]
}