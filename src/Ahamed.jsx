import { Link, NavLink, useNavigate } from "react-router-dom";

export default function Ahamed_react(){
    let page=useNavigate()
    return(
        <>
            <h1>
                My name is zuber
            </h1>
            <NavLink to="hook/state">
                <button>
                    State
                </button>
            </NavLink>

            <Link to="hook/context">
                <h1>Demo</h1>
            </Link>

            <button onClick={()=>{
                page("/zuber")
            }}>
                Click
            </button>
            <button onClick={()=>{page("/reducer")}}>reducer</button>
        </>
    )
}