import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../store/counter";
import { privacyActions } from "../store/privacy";


const Controls = () => {

  const dispatch = useDispatch();
  const inputElement = useRef();

  const handeOnIncrement = () => {
    dispatch(counterActions.increment());
  }
  const handeOnDecrement = () => {
    dispatch(counterActions.decrement());
  }

  const handelOnPrivacy = () => {
    dispatch(privacyActions.toggle());
  }


  const handeOnAdd = () => {
    dispatch(counterActions.add(inputElement.current.value));
      inputElement.current.value = "";
  };

  const handeonSub = () => {
    dispatch(counterActions.subs(inputElement.current.value));
    inputElement.current.value = "";
  }

  const handeonMul = () => {
    dispatch(counterActions.mul(inputElement.current.value));
    inputElement.current.value = "";
  }
 
  
    return (
      <>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button"
         class="btn btn-primary" 
         onClick={handeOnIncrement}>+1
         </button>
        <button type="button" 
        class="btn btn-success"
         onClick={handeOnDecrement}>-1
         </button>
         <button type="button" class="btn btn-warning" onClick={handelOnPrivacy}>PRIVACY TOGGLE</button>
      </div>

      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center gap" >
        <input type="text"
         className="size" 
         placeholder="enter number"
         ref={inputElement}/>
      
        <button type="button" 
        class="btn btn-info"
         onClick={handeOnAdd}>ADD
         </button>

         <button type="button" 
        class="btn btn-danger"
        onClick={handeonSub}
         >SUBTRACT
         </button>

         <button type="button" 
        class="btn btn-dark"
        onClick={handeonMul}
         >MULTIPLIER
         </button>
      </div>

      </>

      
    );
};

export default Controls;