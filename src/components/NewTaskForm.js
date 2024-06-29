import React from "react";
function NewTaskForm({cat, setEachTask, eachTask}){
  function handleSubmit(e){
    e.preventDefault()
    const newTask={
      category: e.target.category.value,
      text: e.target.text.value
    }
    console.log(newTask)
    const newArr = [...eachTask,newTask]
    setEachTask(newArr)
    }
  
  return (
    <form className="new-task-form" onSubmit={(e)=>handleSubmit(e)}>
      <label>
        Details
        <input details="details" name="text" />
      </label>
      <label>
        Category
        <select name="category">
          <option value="Code">Code</option>
          <option value="Food">Food</option>
          <option value="Money">Money</option>
          <option value="Misc">Misc</option>
          {/* render <option> elements for each category here */}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
