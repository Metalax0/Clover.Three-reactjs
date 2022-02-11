
const TODoTemplate = ({ index, indexArr, changeState }) => {

  function clickedCheckbox() {
    // changeState(indexArr[index].disabled = true)
    indexArr.map((value, i) => {
      if (index === i) {
        indexArr[index].disabled = true;
        indexArr[index].className = 'todo-option ' + 'strikedField';
        changeState([...indexArr]);
      }
    });
  }

  function deleteTask() {
    // if index we want to delete matches with i (index of filter), exclude that in new array
    var newArr = indexArr.filter((value, i) => {
      if (index !== i) {
        return true;
      } else return false;
    });
    changeState(newArr);
  }

  return (
    <div className="task">
      <input
        type="checkbox"
        onClick={() => {
          clickedCheckbox();
        }}
        disabled={indexArr[index].disabled}
        checked={indexArr[index].disabled}
        onChange={(checked) => {
          checked.target.checked = indexArr[index].disabled;
        }}
      />
      <input
        className={indexArr[index].className}
        type="text"
        placeholder="Write Task Name Here"
        onChange={(value) => {
          indexArr[index].data = value.target.value;
          changeState([...indexArr]);
        }}
        value={indexArr[index].data}
        disabled={indexArr[index].disabled}
      />
      <button className="deleteButton" onClick={deleteTask}>
        <img src="/Resources/icon_delete.png" alt="Delete Button" />
      </button>
    </div>
  );
};

export default TODoTemplate;
