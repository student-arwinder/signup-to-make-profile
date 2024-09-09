import TodoItem from "./components/TodoItem"
//import AppTodo from "./components/AppTodo"
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
//import AddTodo1 from "./components/AppTodo1";
//import AddTodo2 from "./components/AppTodo2";
import "./App.css";
import { useState } from "react";
import Welcome from "./components/Welcome";
import { TodoItemsContext } from "./store/Todo_items_store";



function App() {
   /*const initialtodoItems = [{
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
];*/
   

const [todoItems, settodoItems] = useState([]);

/*const handleNewItem = (itemName, itemDueDate) => {
//console.log(`New Item Added: ${itemName} Date: ${itemDueDate}`);
const newToDoItmes = [...todoItems,
    {name: itemName, dueDate: itemDueDate}];
    settodoItems(newToDoItmes);
}*/

const addNewItem = (itemName, itemDueDate) => {
   //console.log(`New Item Added: ${itemName} Date: ${itemDueDate}`);
       settodoItems((currentValue) => [
         ...currentValue, {name: itemName, dueDate: itemDueDate}
       ]);
   }


 const deleteItem = (todoItemName) => {
   const newToDoItmes = todoItems.filter(item => item.name !== todoItemName);
   settodoItems(newToDoItmes);
//console.log(`item is deleted ${todoItemName}`);
 }

//const defaulttodoItems = [{name: "buy ghee", dueDate: "today"}];

   return ( 
      <TodoItemsContext.Provider 
      value={{
         todoItems: todoItems, 
         addNweItem: addNewItem, 
         deleteItem: deleteItem,
         
      }}>
   <center className="todo-container">
    <AppName />
    <AddTodo />
     <Welcome></Welcome>
    <TodoItem></TodoItem>
    </center>
    </TodoItemsContext.Provider>
   ); 

}

export default App
