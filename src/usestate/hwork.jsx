import { useState } from "react";
import "./hwork.css"

export default function Home_work(){
    let photo= ["https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=600" ,"https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=600 ",
        "https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/593655/pexels-photo-593655.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/135940/pexels-photo-135940.jpeg?auto=compress&cs=tinysrgb&w=600"
    ]
    let [count,setCount]= useState(0)
    return(
        <>
       <img src={photo[count]} alt="" />
        <button onClick={()=>setCount(count+1)}>
            start
        </button>
        </>
    )
}