import TodoItem from "./components/TodoItem"
//import AppTodo from "./components/AppTodo"
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
//import AddTodo1 from "./components/AppTodo1";
//import AddTodo2 from "./components/AppTodo2";
import "./App.css";
import { useState } from "react";
import Welcome from "./components/Welcome";

function App() {
   const initialtodoItems = [{
      name:'Buy Milk',
      dueDate:'4/10/23',
   },
{
   name:'Go To College',
   dueDate:'4/10/23',
},

{
   name:'new post',
   dueDate:'like & comment',
},
];
   

const [todoItems, settodoItems] = useState(initialtodoItems);

const handleNewItem = (itemName, itemDueDate) => {
//console.log(`New Item Added: ${itemName} Date: ${itemDueDate}`);
const newToDoItmes = [...todoItems,
    {name: itemName, dueDate: itemDueDate,}];
    settodoItems(newToDoItmes);
}


 const handeDeleteItem = (todoItemName) => {
   const newToDoItmes = todoItems.filter(item => item.name !== todoItemName);
   settodoItems(newToDoItmes);
//console.log(`item is deleted ${todoItemName}`);
 }

   return ( 

   <center className="todo-container">
    <AppName />
    <AddTodo onNewItem={handleNewItem}/>
    {todoItems.length == 0 && <Welcome></Welcome>}
    <TodoItem todoItems={todoItems} onDeleteClick={handeDeleteItem}></TodoItem>

   </center>
   ); 

}

export default App
