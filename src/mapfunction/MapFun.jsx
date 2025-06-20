import "./Maofun.css"
export default function Mapfun(){
    let ar=[
        "html","css","javascript","react","python","django"
    ]

    let content=[
        {logo:"https://thefusioneer.com/wp-content/uploads/2023/11/5-AI-Advancements-to-Expect-in-the-Next-10-Years-scaled.jpeg",name:"Demo",address:"Karur"},
        {logo:"https://itbrief.com.au/uploads/story/2023/11/27/img-d320oqYWscvU8q8HLX0brOyX.webp",name:"Ai Demo",address:"Villupuram"},
        {logo:"https://incubator.ucf.edu/wp-content/uploads/2023/07/artificial-intelligence-new-technology-science-futuristic-abstract-human-brain-ai-technology-cpu-central-processor-unit-chipset-big-data-machine-learning-cyber-mind-domination-generative-ai-scaled-1.jpg",name:"Machine",address:"Covai"},
        {logo:"https://news.columbia.edu/sites/default/files/styles/cu_crop/public/content/2023/artificial-intelligence.jpg?itok=8KSVUG8e",name:"Learning",address:"Chennai"},
        {logo:"https://media.istockphoto.com/id/1387900612/photo/automation-data-analytic-with-robot-and-digital-visualization-for-big-data-scientist.jpg?s=612x612&w=0&k=20&c=50maOJU6CpVC55mYnUqtff2aiaJZ7KlmMn4jNhWD_eo=",name:"Deep learning",address:"Erode"}
    ]
    return(
        <>
            {/* <h3>
                {ar[0]},
                <br />
                {ar[1]}
            </h3> */}

            {
                ar.map((item,index)=>
                    <h4 key={index}>
                        <u>{item}</u>
                    </h4>
                )
            }


            <div className="main">
                {
                    content.map((a,b)=>
                        <div className="main_content" key={b}>
                            <img src={a.logo} alt="" />
                            <h1>
                                {a.name}
                            </h1>
                            <h4>
                                {a.address}
                            </h4>
                        </div>
                    )
                }
            </div>
        </>
    )
}