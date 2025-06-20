import "./Demo1.css"
import aidemo from "../ai.avif"
export default function Demo_1(){
    let a="Zuber ahamed BE(ECE)";
    console.log(a);
    let hei="200px";
    let link="https://thefusioneer.com/wp-content/uploads/2023/11/5-AI-Advancements-to-Expect-in-the-Next-10-Years-scaled.jpeg";
    let command=true

    let answer;

    if(false){
        answer="true block"
    }
    else{
        answer="false block"
    }

    let name="ahamed"

    console.log(Math.random())
    return(
        <>
            <h1 className="text-bg-primary">Hello welcome to React-Js</h1>
            <input type="text" className="demo" placeholder="enter name here"/>
            <h3>
                {a}
            </h3>
            <img src={link} alt={a}  height={hei}/>
            <img src={aidemo} alt={a}  height={hei}/>

            {command && <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam facilis architecto libero sit ipsum cum id earum assumenda beatae voluptate, et expedita adipisci deserunt sequi ut perspiciatis laboriosam cumque quisquam.</p>}

            <h2>
                {answer}
            </h2>

            {name==="ahamed"?<h1>Yes Iam Ahamed</h1>:<h1>Iam not</h1>}
        </>
    )
}
