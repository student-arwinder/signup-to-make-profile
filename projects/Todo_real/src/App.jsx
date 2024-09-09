import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import AddTodo1 from "./components/AppTodo1";
import AddTodo2 from "./components/AppTodo2";
import "./App.css";

function App() {
   return ( 
   <center className="todo-container">
    <AppName />
    <AddTodo />
    <div className="items-container">
    <AddTodo1 />
    <AddTodo2 />
    </div>
    

    

   </center>
   ); 

}

export default App
