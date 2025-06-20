import ChildProps from "./ChildProps"

export default function ParentProps(){
    let user="Zuberahamed";
    let age=21
    return(
        <>
        <ChildProps answer={{user,age}}/>
        </>
    )
}