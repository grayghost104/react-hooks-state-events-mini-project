import React from "react";
import Task from "./Task";
import { v4 as uuidv4 } from 'uuid'
import CategoryFilter from "./CategoryFilter";
function TaskList({ eachTask, setEachTask, cat, TASKS}) {
  
  const mappedTask = eachTask.map((indvTask) => {
    return (
      <Task task={indvTask} key={uuidv4()} handleDelete={handleDelete}/>

    )
  })
  function handleDelete(text) {
    const newTask = eachTask.filter((indvTask) => {
      if (text === indvTask.text) {
        return false
      }
      return true
    })
    setEachTask(newTask)
  }
  function allCat(category) {
    // console.log(category)
    const newCat = TASKS.filter((indvThings) =>{
      if(category === "All"){
        return true 
      }
    if (indvThings.category === category){
      return true 
    }
    return false
  })
  setEachTask(newCat)
  // const appAll
}
  return (
    <div className="tasks">
      <CategoryFilter allCat={allCat}/>
      {mappedTask}
    </div>
 );
  
}


export default TaskList;
