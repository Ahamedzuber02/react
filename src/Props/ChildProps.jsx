export default function ChildProps(props){
    console.log(props)
    return(
        <>
        <h3>
            {props.answer.user},
            <br />
            {props.answer.age}
        </h3>
        </>
    )
}