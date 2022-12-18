import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input onChange={props.changes} type="text" value={props.text} />
      <button onClick={props.addingToList}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
