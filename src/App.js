import React from "react";
import "./App.css";
import List from "./components/List";
import TodoForm from "./components/TodoForm";

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <List />
    </div>
  );
}

export default App;
