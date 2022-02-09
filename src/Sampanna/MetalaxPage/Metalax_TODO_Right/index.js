const MetalaxToDoRight = () => {
  let parentContainer = document.getElementById("todo-checkbox-container");

  // Method to strike a text (strike to do tasks)
  function strikeTask(currentCheckbox) {
    /* 
	NOTE : According to html structure, first checkbox corresponds to second text field
		   this is why we're comparing checkbox of i index with text tield of i+1 index
		   */

    var inputDOM = document.querySelectorAll('input[type="text"]');
    var checkboxDOM = document.querySelectorAll('input[type="checkbox"]');

    for (var i = 0; i < checkboxDOM.length; i++) {
      if (checkboxDOM[i] == currentCheckbox) {
        inputDOM[i + 1].classList.add("strike");
        inputDOM[i + 1].disabled = true;
        checkboxDOM[i].disabled = true;
      }
    }
  }

  // Method to delete task when delete button is pressed
  function deleteTask(buttonPressed) {
    if (parentContainer) {
      parentContainer = buttonPressed.parentElement;
      parentContainer.outerHTML = "";
    }
  }

  // Method to add new task (adds at the end of previous task)
  function addTask() {
    // var parentContainer = document.getElementById("todo-checkbox-container");
    var allTask = document.getElementsByClassName("task");
    var content =
      '<div class="task"><input type="checkbox" onclick = strikeTask(this)><input class="todo-option" type="text" placeholder="Write Task Name Here"><button class="deleteButton" onClick="deleteTask(this)"><img src="../resources/icon_delete.png"></button></div>';

    // If all tasks are empty, adds to parent container, else adds to last task
    if (allTask.length == 0) {
      if (parentContainer) parentContainer.innerHTML = content;
    } else {
      var lastTask = allTask[allTask.length - 1];
      lastTask.insertAdjacentHTML("afterend", content);
    }
  }

  return (
    // Right Column Container
    <div className="column-right">
      <input
        className="todo-heading"
        type="text"
        placeholder="Write List Name Here"
      />

      <div id="todo-checkbox-container">
        <div className="task">
          <input type="checkbox" onClick={() => {strikeTask(this)}} />
          <input
            className="todo-option"
            type="text"
            placeholder="Write Task Name Here"
          />
          <button className="deleteButton" onClick={deleteTask(this)}>
            <img src="../resources/icon_delete.png" />
          </button>
        </div>

        <div className="task">
          <input type="checkbox" onClick={strikeTask(this)} />
          <input
            className="todo-option"
            type="text"
            placeholder="Write Task Name Here"
          />
          <button className="deleteButton" onClick={deleteTask(this)}>
            <img src="../resources/icon_delete.png" />
          </button>
        </div>

        <div className="task">
          <input type="checkbox" onClick={strikeTask(this)} />
          <input
            className="todo-option"
            type="text"
            placeholder="Write Task Name Here"
          />
          <button className="deleteButton" onClick={deleteTask(this)}>
            <img src="../resources/icon_delete.png" />
          </button>
        </div>

        <div className="task">
          <input type="checkbox" onClick={strikeTask(this)} />
          <input
            className="todo-option"
            type="text"
            placeholder="Write Task Name Here"
          />
          <button className="deleteButton" onClick={deleteTask(this)}>
            <img src="../resources/icon_delete.png" />
          </button>
        </div>

        <div className="task">
          <input type="checkbox" onClick={strikeTask(this)} />
          <input
            className="todo-option"
            type="text"
            placeholder="Write Task Name Here"
          />
          <button className="deleteButton" onClick={deleteTask(this)}>
            <img src="../resources/icon_delete.png" />
          </button>
        </div>
      </div>

      <button className="newTask" onClick={addTask()}>
        New Task
      </button>
    </div>
  );
};

export default MetalaxToDoRight;
