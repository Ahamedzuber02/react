import { useState } from "react"
import "./form.css"

export default function Form(){
    let [name,setName]=useState("");
    let [err,setErr]=useState("")
    function save(e){
        e.preventDefault();
        if(!name){
            alert("please enter details")
            setErr("please enter name here")
        }
        else{
            console.log(name)
        }
    }
    return(
        <>
        <form onSubmit={save} onReset={()=>alert("page reseted")}>
            <input type="text" placeholder="enter name here"  value={name} onChange={(e)=>setName(e.target.value)}  style={err ? {border:"2px solid red"}: {}}  className={err ? "a": ""}/>
            <p>{err}</p>
            <input type="submit" />
            <input type="reset" />
           
        </form>
        <h3>
            Hai,{name}
        </h3>
        
        </>
    )
}