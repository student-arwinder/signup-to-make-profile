import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Display from "./components/Display";
import Controls from "./components/Controls";
import Heading from "./components/Heading";
import Card from "./components/Card";
import { useSelector } from "react-redux";
import PrivacyToggle from "./components/PrivacyToggle"


function App() {
  
  const privacy = useSelector((store) => store.privacy);
  return (
       
    
      <div class="px-4 py-5 my-5 text-center">
      <Card>
    <Heading></Heading>
    <div class="col-lg-6 mx-auto">
      {privacy ? <PrivacyToggle/> : <Display/>}
      <Controls></Controls>
    </div>
    </Card>
  </div>

 
 
 
   
  )
}

export default App;
