import { useReducer, useState } from "react"

export default function Next_work(){
        const photo= ["https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=600" ,"https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=600 ",
        "https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/593655/pexels-photo-593655.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/135940/pexels-photo-135940.jpeg?auto=compress&cs=tinysrgb&w=600"
    ]
    // const totalImages= photo.length;
    // let [a,b]=useReducer ((a,action)=>{
    //     if(action.type==="+"){
    //         return{count:a.count+1}
    //     }
    //     else if(action.type==="-"){
    //         return{count:a.count-1}
    //     }
        
    // },{count:0})
    return(
        <>
        <img src={photo[a.count]} alt="" />
        {/* <button onClick={()=>b({type:"+"})}>next</button>
        <button onClick={()=>b({type:"-"})}>previous</button> */}
        </>
    )
}