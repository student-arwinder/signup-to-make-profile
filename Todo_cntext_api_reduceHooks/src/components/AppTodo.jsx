//import { useState } from "react";
import { useContext } from "react";
import { MdOutlineDelete } from "react-icons/md";
import { TodoItemsContext } from "../store/Todo_items_store";

function AppTodo({todoDate, todoName, }) {

  const {deleteItem} = useContext(TodoItemsContext);


    //let todoName = 'Buy Milk';
    //let todoDate = '4/10/2023';


     return (

      <div className="container">
      <div className="row Rv-row">
      <div className="col-6">  {todoName}</div>
      <div className="col-4">{todoDate}</div>
      <div className="col-2">
        <button type="button" class="btn btn-danger Rvbotton"
        onClick={() => deleteItem(todoName)}><MdOutlineDelete /></button></div>
      </div>
    </div>   
      
    );
}
export default AppTodo;