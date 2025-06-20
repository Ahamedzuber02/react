import { useEffect, useState } from "react";
import axios from "axios";

export default function Todolist() {
    const address = "https://684955b745f4c0f5ee70fa47.mockapi.io/ahamedzuber/idm_course";

    const [name, setName] = useState("");
    const [data, setData] = useState([]);

    function save(e) {
        e.preventDefault();
        axios.post(address, { name, done: false }) // Add done: false when creating
            .then(() => {
                setName('');
                fetchData();
            });
    }

    function fetchData() {
        axios.get(address)
            .then((res) => {
                setData(res.data);
            }).catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        fetchData();
    }, []);

    function toggleDone(id, currentStatus) {
        axios.put(`${address}/${id}`, { done: !currentStatus })
            .then(() => fetchData());
    }
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

    return (
        <>
            <h3>Todo Input</h3>
            <form onSubmit={save}>
                <input
                    type="text"
                    placeholder="New Todo"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <br />
                <button type="submit">Add new task</button>
            </form>

            <h3>Todo List</h3>
            <button>All</button>
            <button>Done</button>
            <button>Todo</button>

            <div>
                {
                    data.map((item) =>
                        <section key={item.id}>
                            <h1 style={{ textDecoration: item.done ? 'line-through' : 'none' }}>
                                {item.name}
                            </h1>
                            <input
                                type="checkbox"
                                checked={item.done}
                                onChange={() => toggleDone(item.id, item.done)}
                            />
                            <button onClick={()=>remove(item.id)}>delete done task</button>
                        </section>
                    )
                }
            </div>

            
            <button>Delete all tasks</button>
        </>
    );
}
