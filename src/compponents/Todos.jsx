

export function Todos(props){
    return <>
        {
            props.todos.map((todo,index)=>{
                return <div key={index}>
                <h1>Title : {todo.title}</h1>
               <h3>Description :{todo.description}</h3>
               <h4> completed : {todo.completed == true ? "Completed":"mark as complete"}</h4>
              <button>Add a todo</button>
                </div>
            })
        }
    </>
}