import { useEffect, useState } from "react"
import { CreateTodo } from "./compponents/CreateTodo"
import { Todos } from "./compponents/Todos"


function App() {
 
const [todo,setTodos] = useState([])
useEffect(()=>{
  fetch("http://localhost:3000/todos").then( async function(data){

  let json = await data.json()
  setTodos(json.todos)
})
},[])


console.log(todo)
  return (
    <>
     
     <CreateTodo/>
     <Todos todos={todo} />
    </>
  )
}

export default App
