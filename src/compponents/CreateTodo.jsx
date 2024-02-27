import { useState } from "react"


export function CreateTodo(){

    const [title,setTitle] = useState("")
    const [desc,setDesc] = useState("")

    return <div>
        <input id={"title"} type="text" placeholder="title" onChange={function(e){
            setTitle(e.target.value)
        }}></input>
        <br/>
        <input id={"description"} type="text" placeholder="description" onChange={function(e){
            setDesc(e.target.value)
        }}></input>
        <br></br>
        <button onClick={()=>{
            fetch("http://localhost:3000/todo",{
                method:"POST",
                body:JSON.stringify({
                    title:title,
                    description:desc
                }),
                headers:{
                    "content-type":"application/json"
                }
            }).then(async(data)=>{
            let json  = await data.json()
            alert('data added check db')
            })
        }}>Add todo</button>

    </div>
}