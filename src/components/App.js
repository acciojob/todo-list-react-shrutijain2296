
import React, {useState} from "react";
import './../styles/App.css';

const App = () => {
  let [input, setInput] = useState("");
  let [tasks, setTasks] = useState([]);
  let [editedText, setEditedTask] = useState("");
  let [editingIndex, setEditingIndex] = useState(null);

  const addItem = () => {
    if(input.trim() !== ""){
      setTasks([...tasks, input]);
      setInput("");
    }  
  }

  const editItem = (index) => {
    setEditedTask(tasks[index]);
    setEditingIndex(index);
  }

  const saveItem = () => {
    if(editedText.trim() !== ""){
      const updatedTasks = [...tasks];
      updatedTasks[editingIndex] = editedText;
      setTasks(updatedTasks);
      setEditedTask("");
      setEditingIndex(null);
    }
  }

  const deleteItem = (index) =>{
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>To Do List</h1>
        <input type = "text" onChange={(event) => setInput(event.target.value)}  value = {input} />
        <button className="add_tasks_section" onClick = {addItem}>Add</button>
        <ul className="tasks_section">
        {
          tasks.map((task, index) => {
            return(
              <li className="task" key = {index}>
              {editingIndex === index ? (
                <><input type="text" onChange={(event) => setEditedTask(event.target.value)} value={editedText} />
                <button className="save" onClick={saveItem}>
                  Save
                </button></>
              ) : (
                <div>
                  {task}
                  <button className = "edit" onClick={() => editItem(index)}>Edit</button>
                  <button className = "delete" onClick={() => deleteItem(index)} >Delete</button>
                </div>
              )}
            </li>
            )
            
          })
        }
        </ul>
       
    </div>
  )
}

export default App
