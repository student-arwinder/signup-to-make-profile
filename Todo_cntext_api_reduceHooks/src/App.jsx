import TodoItem from "./components/TodoItem"
//import AppTodo from "./components/AppTodo"
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
//import AddTodo1 from "./components/AppTodo1";
//import AddTodo2 from "./components/AppTodo2";
import "./App.css";
import {  useReducer } from "react";
import Welcome from "./components/Welcome";
import { TodoItemsContext } from "./store/Todo_items_store";


const todoItemReducer = (currTodoItems, action) => {
   let newToDoItmes = currTodoItems;
if (action.type === "NEW_ITEM"){
       newToDoItmes = [
         ...currTodoItems, {name: action.payload.itemName, dueDate: action.payload.itemName}
      ]
}
else if(action.type === "DELETE_ITEM"){
   newToDoItmes = currTodoItems.filter
   ((item) => item.name !== action.payload.itemName)
}
return newToDoItmes;
}

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
   

//const [todoItems, settodoItems] = useState([]);
const [todoItems, dispatchTodoItems] = useReducer(todoItemReducer, initialtodoItems);



/*const handleNewItem = (itemName, itemDueDate) => {
//console.log(`New Item Added: ${itemName} Date: ${itemDueDate}`);
const newToDoItmes = [...todoItems,
    {name: itemName, dueDate: itemDueDate}];
    settodoItems(newToDoItmes);
}*/

const addNewItem = (itemName, itemDueDate) => {

   const  newItemAction = {
      type: "NEW_ITEM",
      payload: {
         itemName, 
         itemDueDate
      }
   };
   dispatchTodoItems(newItemAction);
   //console.log(`New Item Added: ${itemName} Date: ${itemDueDate}`);
       /*settodoItems((currentValue) => [
         ...currentValue, {name: itemName, dueDate: itemDueDate}
       ]);*/
   };


 const deleteItem = (todoItemName) => {

   const dleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: todoItemName,
      }
   };
   dispatchTodoItems(dleteItemAction);
   /*const newToDoItmes = todoItems.filter(item => item.name !== todoItemName);
   settodoItems(newToDoItmes);*/
//console.log(`item is deleted ${todoItemName}`);
 };

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
