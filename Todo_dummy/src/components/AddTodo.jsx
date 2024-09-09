import {  useState } from "react";
import { MdAddCard } from "react-icons/md";

function AddTodo({onNewItem}) {


  
  

const [todoName, setTodoName] = useState ();
const [todoDueDate, setTodoDueDate] = useState ();



const handelNameChange = (event) => {
  setTodoName(event.target.value);


}

const handelDateChange = (event) => {
  setTodoDueDate(event.target.value);
  console.log(`number will be ${countNumber}`);
}

const handelAddButtonClicked = () => {
  onNewItem(todoName, todoDueDate);
  setTodoName("");
  setTodoDueDate("");

}




    return(
        <div className="container text-center">
  <div className="row">
    <div className="col-6" >
      <input type="text" 
      placeholder="Enter Todo Here"  
      value={todoName} 
      onChange={handelNameChange}/></div>
    <div className="col-4">
      <input type="date" 
      value={todoDueDate} 
      onChange={handelDateChange}/></div>
    <div className="col-2">
      <button type="button" 
      className="btn btn-success" 
      onClick={handelAddButtonClicked}><MdAddCard /></button></div>
  </div>
  </div>
    );

    
};

export default AddTodo;