import axios from "axios"
import { useState } from "react"
import View from "./View"

export default function Create(){

    let address="https://684955b745f4c0f5ee70fa47.mockapi.io/ahamedzuber/idm_course"
    const [name,setName]=useState("")
    const [gender,setgender]=useState("")
    function save(e){
        e.preventDefault()
        axios.post(address,{name,gender})
        .then(()=>{
        alert('data saved!!')
        setName('')
        setgender('')
        })

         .catch((err) => {
                console.error("Error saving data:", err);
                alert("Error saving data!");
            })

    }
    return(
        <>
            <form onSubmit={save}>
                <input type="text" placeholder="enter name here" value={name} onChange={(e)=>setName(e.target.value)}/>
                <br />
                <br />
                <label htmlFor="male">male gender</label>
                <input type="radio" id="male" name="gender" value="male" checked={gender==="male"} onChange={(e)=>setgender(e.target.value)} />
                <label htmlFor="female">female gender</label>
                <input type="radio" id="female" name="gender" value="female" checked={gender==="female"} onChange={(e)=>setgender(e.target.value)}/>
                <br />
                <input type="submit" value="save" />
            </form>

            <View />
        </>
    )
}