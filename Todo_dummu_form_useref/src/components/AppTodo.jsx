//import { useState } from "react";
import { MdOutlineDelete } from "react-icons/md";

function AppTodo({todoDate, todoName, onDeleteClick}) {


    //let todoName = 'Buy Milk';
    //let todoDate = '4/10/2023';


     return (

      <div className="container">
      <div className="row Rv-row">
      <div className="col-6">  {todoName}</div>
      <div className="col-4">{todoDate}</div>
      <div className="col-2">
        <button type="button" class="btn btn-danger Rvbotton"
        onClick={() => onDeleteClick(todoName)}><MdOutlineDelete /></button></div>
      </div>
    </div>   
      
    );
}
export default AppTodo;