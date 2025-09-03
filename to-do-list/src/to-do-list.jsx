import React,{useState,useRef} from "react";


function Todo () {
    const [tasks,setTasks] = useState([]);
    const inputRef = useRef(null);
    
    function addTask() {
        const value = inputRef.current.value.trim();
        if (value === "") return; 
        setTasks([...tasks, value]); 
        inputRef.current.value = ""; 
      }

    return(
        <>
        <div>

        <input
        type = "text"
        id = "text"
        placeholder = "Enter your task here.."
        ref = {inputRef}
        />
        </div>
        <button onClick={addTask}>Add</button>

        <div>
        <ul>
          {tasks.map((u, index) => (
            <li key={index}>
              {u} ✅ 🗑️
            </li>
          ))}
        </ul>
        </div>
        
        
        
        </>
    )
}


export default Todo;