import Buttoncontainer from "./components/Buttoncontainer";
import Display from "./components/Display";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  
  let [calVal, setCalVal] = useState("");

  let onButtonClick = (romeo) => {
    if(romeo == "C"){
      setCalVal("");
    }
    else if(romeo == "="){
let newAns = eval(calVal);
setCalVal(newAns);
    }
    else{
let newText = calVal + romeo;
setCalVal(newText);
    }
  }

  

  return (
   <div className={styles.calculator}>
    <Display displayValue = {calVal}></Display>
   <Buttoncontainer poop={onButtonClick}></Buttoncontainer>
   </div>
  );
}

export default App;































/*let onButtonClick = (buttonText) => {
  if(buttonText === "C"){
 setCalVal("");
  }
  else if (buttonText === "="){
 let newValue = eval(calVal);
 setCalVal(newValue);
  }
  else {
   let newdisplay = calVal + buttonText;
   setCalVal(newdisplay);
 
  }
 
     //console.log(buttonText);
   }*/
