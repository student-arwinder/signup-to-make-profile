
import {  useContext, useRef } from "react";
import { MdAddCard } from "react-icons/md";

function AddTodo() {


  const {handleNewItem} = useContext(Contextapi);
  
  
  const todoNameElement = useRef("");
  const todoDueDateElement = useRef("");


const handelAddButtonClicked = (event) => {
  event.preventDefault();
const todoName = todoNameElement.target.value;
const todoDueDate = todoDueDateElement.target.value;
todoNameElement.target.value = ("");
todoDueDateElement.target.value = ("");
handleNewItem(todoName, todoDueDate);
  
}




    return(
        <div className="container text-center">
  <form className="row" onSubmit={handelAddButtonClicked} >
    <div className="col-6" >
      <input type="text" 
      placeholder="Enter Todo Here"  
      ref={todoNameElement}
      /></div>
    <div className="col-4">
      <input type="date" 
      ref={todoDueDateElement}
      
      /></div>
    <div className="col-2">
      <button type="button" 
      className="btn btn-success" 
      ><MdAddCard /></button></div>
  </form>
  </div>
    );

    
};

export default AddTodo;