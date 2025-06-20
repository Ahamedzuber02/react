import { NavLink, useNavigate } from "react-router-dom";
import "./finaltouch.css"

export default function Allinone(){
    let page=useNavigate()
    return(
        <>
       <div>
         <NavLink to="task/home">
        <button>
            Home
        </button>
        </NavLink>
        <NavLink to="task/about">
        <button>
            about
        </button>
        </NavLink>
        <button onClick={()=>{page("task/contact") }}>
            Contact
        </button>
        <button onClick={()=>{page("task/logo")}}>logo</button>
       </div>


        </>
    )
}