import FoodInput from "./components/FoodInput";
import Fooditems from "./components/Fooditems";
import Errormessage from "./components/Errormessage";
//import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Container from "./components/Container";
import { useState } from "react";


//"dal", "vegges", "carrot", "salad", "ghobi", "ghee "
function App() {
  
  //let foodItems = [];
  //let foodItems = ["dal", "vegges", "carrot", "salad", "ghobi", "ghee "];



 /*let textStatArr = useState("food item entered by user");
 let textToShow = textStatArr[0];
 let setTextState = textStatArr[1];
 console.log(`current value of textState: ${textToShow}`);*/




// let [textToShow, setTextState] = useState("food item entered by user");
 //let [textToShow, setTextState] = useState();
 let [foodItems, setFoodItems] = useState(["carrot", "banana", "roti"]);
 //console.log(`current value of textState: $(foodItems)`);
 //console.log(`current value of textState: ${textToShow}`);
 /*if(event.key === 'Enter'){
     let newFoodItem = event.target.value;
     let newItems = [...foodItems, newFoodItem];
     setFoodItems(newItems);
     console.log(`food value entered is ${newFoodItem}`);*/

// let textToShow = "food item enter here";



  const onKeyDown = (event) => {
    if(event.key === 'Enter'){
    let newItem = event.target.value;
    let newFoodItems = [...foodItems, newItem];
    setFoodItems(newFoodItems);
    console.log(`food value enter is ${newItem}`);
    }
    
    //console.log(event);
    //console.log(event.target.value);
    //setTextState(event.target.value);
    //textToShow = event.target.value;
    //setfoodItems(event.target.value);
  };

  return (
    <>
    
    
    <Container>
      <h1 className="food-heading">Healthy food</h1>
      <FoodInput handelKeyDown={onKeyDown}></FoodInput>
      <Errormessage items={foodItems}></Errormessage>
      <Fooditems items={foodItems}></Fooditems>
      </Container>


      <Container>
        <p>above list is full of healthy items so buy healthy eat halthy ans stay healthy </p>
      </Container>
      
      </>
  
  );
}

export default App;