import React from "react";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import {useState} from "react"
import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });
function App() {
  const [eachTask, setEachTask]=useState(TASKS)
  console.log(eachTask)
  
  return (

    <div className="App">
      <h2>My tasks</h2>
      <NewTaskForm cat={CATEGORIES} setEachTask={setEachTask} eachTask={eachTask}/>
      <TaskList eachTask={eachTask} setEachTask={setEachTask} cat={CATEGORIES} TASKS={TASKS}/>
    </div>
  );
  

}
export default App;
