import React from "react";


function CategoryFilter({cat, allCat}) {
  console.log(allCat)


  return (
    <div className="categories">
      <h5>Category filters</h5>
      <button onClick={()=>{allCat("All")}}>All </button>
      <button onClick={()=>{allCat("Code")}}>Code</button>
      <button onClick={()=>{allCat("Food")}}>Food</button>
      <button onClick={()=>{allCat("Money")}}>Money</button>
      <button onClick={()=>{allCat("Misc")}}>Misc</button>
      {/* render <button> elements for each category here */}
    </div>
  );
}

export default CategoryFilter;
