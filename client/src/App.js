import React, {Fragment} from "react";
import './App.css';

//components

import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";

// Main app code file
function App() {
  return (
    <Fragment>
      <div className="container">
        <InputTodo/>
        <ListTodos/>
      </div>
      
    </Fragment>
  )
  
}

export default App;
