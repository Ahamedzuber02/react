import { useContext } from "react"
import { a } from "./Parent"

export default function Child(){
    let answer=useContext(a)
    console.log(answer)
    return(
        <>
            <h2>
                {answer.c.name}
            </h2>
        </>
    )
}