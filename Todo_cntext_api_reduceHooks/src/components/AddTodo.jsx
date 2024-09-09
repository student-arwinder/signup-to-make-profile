import { useContext } from "react";
import { useRef  } from "react";
import { MdAddCard } from "react-icons/md";
import { TodoItemsContext } from "../store/Todo_items_store";

function AddTodo() {


//const noOfClicks = useRef();
const {addNweItem} = useContext(TodoItemsContext);
const todoNameElement = useRef("");
const dueDateElement = useRef("");


const handelAddButtonClicked = (event) => {
  event.preventDefault();
  const todoName = todoNameElement.current.value;
  const todoDueDate = dueDateElement.current.value;
  todoNameElement.current.value ="";
  dueDateElement.current.value = "";
//console.log(`${todoName} due on ${todoDueDate}`);
addNweItem(todoName, todoDueDate);
  
  //console.log(event);

  

};




    return(
        <div className="container text-center">
  <form className="row" 
  onSubmit={handelAddButtonClicked}>
    <div className="col-6" >
      <input type="text" 
      ref={todoNameElement}
      placeholder="Enter Todo Here"  
      
      /*onChange={handelNameChange}*//></div>
    <div className="col-4">
      <input type="date" 
      ref={dueDateElement}
       
      /*onChange={handelDateChange}*//></div>
    <div className="col-2">
      <button type="submit"
      className="btn btn-success" 
      ><MdAddCard /></button></div>
  </form>
  </div>
    );

    
};

export default AddTodo;