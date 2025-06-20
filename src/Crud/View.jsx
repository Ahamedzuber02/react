import axios from "axios"
import { useEffect, useState } from "react"

export default function View(){
    let address="https://684955b745f4c0f5ee70fa47.mockapi.io/ahamedzuber/idm_course";
    let [data,setData]=useState([])

    useEffect(()=>{
        axios.get(address).then((s)=>{
            console.log(s.data)
            setData(s.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[address])

    function remove(id){
            console.log(address+"/"+id)
        axios.delete(address+"/"+id).then(()=>{
            alert('data deleted')
             axios.get(address).then((s)=>{
            console.log(s.data)
            setData(s.data)
        }).catch((err)=>{
            console.log(err)
        })
        })
        
    }

    function ed(item){
        console.log(item)
        sessionStorage.setItem("id",item.id)
        sessionStorage.setItem("name",item.name)
    }

    let [uName,setUname]=useState("")
    let [id,setId]=useState(0)
    useEffect(()=>{
        setUname(sessionStorage.getItem("name"))
        setId(sessionStorage.getItem('id'))
    },[])

    function updateData(e){
        e.preventDefault()
        axios.put(address+"/"+id,{name:uName})
        alert("updated")
    }
    return(
        <>  
            <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap",alignItems:"center",justifyContent:"center"}}>
                {
                    data.map((item,index)=>
                        <section key={index} style={{display:"flex",flexDirection:"column",flexWrap:"wrap",alignItems:"center",justifyContent:"center"}}>
                            <h1>
                                {item.name}
                            </h1>
                            <p>
                                {item.gender}
                            </p>
                            <button onClick={()=>remove(item.id)}>
                                Remove
                            </button>
                            <button onClick={()=>ed(item)}>
                                Update
                            </button>
                        </section>
                    )
                }
            </div>

            <form onSubmit={updateData}>
                <input type="text"  value={uName} onChange={(e)=>setUname(e.target.value)}/>
                <input type="submit" />
            </form>
        </>
    )
}
// https://github.com/MarvinMichel/expense-tracker