import React, { useState, useReducer } from "react";
import TodoList from "./todoList";
import CreateTodo from "./CreateTodo";
import appReducer from "./reducer";
import UserBar from "./userBar";
function App() {

  const [ state, dispatch ] = useReducer(appReducer, { user: '', todos: [] });
  
  return (
    <div>
      <UserBar user={state.user} dispatch={dispatch}/>
      {state.user && <CreateTodo dispatch={dispatch} />}
      {state.user && <TodoList todos={state.todos} dispatch={dispatch} />}
    </div> 
  )
}
  
export default App;
