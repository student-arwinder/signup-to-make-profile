import Buttoncontainer from "./components/Buttoncontainer";
import Display from "./components/Display";
import styles from "./App.module.css";
//import { useState } from "react";

function App() {
  const buttonNames = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.'];
  




<

  return (
   <div className={styles.calculator}>
    <Display></Display>
   <Buttoncontainer buttons ={buttonNames}></Buttoncontainer>
   </div>
  );
}

export default App;
