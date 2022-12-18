import React, { useState } from "react";

function ToDoItem(props) {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick1() {
    setIsClicked((prevValue) => {
      return !prevValue;
    });
  }

  async function handleClick2() {
    function timeout(delay) {
      return new Promise((res) => setTimeout(res, delay));
    }
    await timeout(1000);
    setIsClicked((prevValue) => {
      return !prevValue;
    });
  }

  async function done() {
    function timeout(delay) {
      return new Promise((res) => setTimeout(res, delay));
    }
    await timeout(1000);
    return props.whenDone(props.id);
  }

  return (
    <div onClick={() => [handleClick1(), handleClick2(), done()]}>
      <li
        style={{
          textDecorationLine: isClicked ? "line-through" : "none"
        }}
      >
        {props.text}
      </li>
    </div>
  );
}

export default ToDoItem;
