import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
//import Login from "./components/Login";
import Signup from "./components/Signup";
import Homepost from "./components/Homepost";





function App() {
  
const [state, setState] = useState("Signup");
  return (
  
<>
      <Header state={state}  setState={setState}></Header>
      {state === "Signup" ? <Signup></Signup> : <Homepost></Homepost>}
      <Footer/>

      </>
     
  );
};

export default App;
