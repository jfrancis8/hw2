import { useState} from "react";
import TodoList from "./todoList";
import CreateTodo from "./CreateTodo";
import UserBar from "./userBar";
function App() {

  const [ user, setUser ] = useState("");
  const [todos, setTodos ] = useState([])
  return (
    <div>
      <UserBar user={user} setUser={setUser}/>
      {user && <CreateTodo user={user} todos={todos} setTodos={setTodos}/>}
      <TodoList todos = {todos} />
    </div> 
  )
}
  
export default App;
