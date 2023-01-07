import React, { useState, useEffect, useRef } from "react";

function Form(props) {
  const [input, setinput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const Change = (e) => {
    setinput(e.target.value);
  };

  const Submit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input,
    });

    setinput("");
  };

  return (
    <form className="todo-form" onSubmit={Submit}>
      {props.edit ? (
        <>
          <input
            type="text"
            placeholder="Update your item"
            name="text"
            value={input}
            className="todo-input edit"
            onChange={Change}
            ref={inputRef}
          />
          <button className="todo-button edit">Update</button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Add a todo"
            name="text"
            value={input}
            className="todo-input"
            onChange={Change}
            ref={inputRef}
          />
          <button className="todo-button"> Add todo</button>
        </>
      )}
    </form>
  );
}

export default Form;
