import { useState } from "react";
import TODoTemplate from "./ToDo_Template";

const MetalaxToDoRight = () => {
  const [indexArr, setindexArr] = useState([
    { disabled: false, className: "todo-option", data: "" },
    { disabled: false, className: "todo-option", data: "" },
    { disabled: false, className: "todo-option", data: "" },
    { disabled: false, className: "todo-option", data: "" },
    { disabled: false, className: "todo-option", data: "" },
  ]);

  // Method to add new task (adds at the end of previous task)
  function addTask() {
    setindexArr([
      ...indexArr,
      { disabled: false, className: "todo-option", data: "" },
    ]);
  }

  return (
    // Right Column Container
    <div className="column-right" id="Metalax-ToDo-column-right">
      <input
        className="todo-heading"
        type="text"
        placeholder="Write List Name Here"
      />

      <div id="todo-checkbox-container">
        {indexArr.map((val, index) => {
          return (
            <TODoTemplate
              key={index} // Not much use, need to prevent error
              index={index}
              indexArr={indexArr}
              changeState={setindexArr}
            />
          );
        })}
      </div>

      <button
        className="newTask"
        onClick={() => {
          addTask();
        }}
      >
        New Task
      </button>
    </div>
  );
};

export default MetalaxToDoRight;
