import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItmes from "./components/TodoItmes";
//import AddTodo2 from "./components/AppTodo2";
import "./App.css";
import { useState } from "react";

function App() {

   const todoItmess = [
      {
      name: "buy Milk",
      dueDate: "3/23/2020",
   },
   {
      name: "buy fruits",
      dueDate: "3/23/2020",
   },
];

   //const [enterDate, setEnterDate] = useState("123456");
   //const [enterTask, SetEnterTask] = useState("");
   


   return ( 
   <center className="todo-container">
    <AppName />
    <AddTodo ></AddTodo>
    <TodoItmes todoValue={todoItmess}></TodoItmes>
    

    

   </center>
   ); 

}

export default App
