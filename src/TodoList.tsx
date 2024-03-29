import { useState } from "react";


interface TodoItem {
    id: number;
    title: string;
    completed: boolean;
  }

export const TodoList:React.FC = () => {
    const[todos, setTodos] = useState<TodoItem[]>([
        {id: 1, title:"Learn TypeScript", completed:false},
        {id: 2, title:"Learn JavaScript", completed:false}
    ]);

    const [input, setInput] = useState<string>(" ");

    const handleToggle = (id: number) => {
        setTodos(
            todos.map((todo) => {
                if(todo.id === id) {
                    return {...todo, completed: !todo.completed};
                }
                return todo;
            })
        )
    }

    const handleClick = () =>{
        const newTodos: TodoItem = {id: Date.now(), title:input, completed: false};
        setTodos([...todos,newTodos]);
    }

  return (
        <div className="container">
            <h1>Todo List</h1>
            <input type="text" placeholder="Add todo item"
            onChange={(e) => setInput(e.currentTarget.value)}/>
            <button onClick={handleClick}>Add</button>
            <ul>
               {todos.map((todo) => (
                <li key={todo.id} onClick={()=> handleToggle(todo.id)} style={{textDecoration: todo.completed ? "line-through" : "none"}}>{todo.title}</li>
               ))}
            </ul>
           
        </div>
  )
}
