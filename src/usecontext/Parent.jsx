import { createContext } from "react"
import Child from "./Child"

export let a=createContext('')
export default function Parent(){
    let b="afril";
    let c={
        name:"Zuber",age:22
    }

    let values={b,c}
    return(
        <>
            <a.Provider value={values}>
                <Child />
                
            </a.Provider>
        </>
    )
}