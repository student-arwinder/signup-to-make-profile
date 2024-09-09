import { useState } from "react";
import Item from "./Item";

const Fooditems = ({items}) => {

  //let foodItems = ["dal", "vegges", "carrot", "salad", "ghobi", "ghee "];

  let [activeItems, setActiveItems] = useState([]);

let onBuybutton = (item, event) => {
 let newItems = [...activeItems, item];
 setActiveItems(newItems);
 console.log(event);
};

  

    return(
      <ul  className="list-group"> 
         {items.map((item) => (
          <Item  
          key = {item} 
          foodItem = {item} 
          bought = {activeItems.includes(item)}
          handelBuybutton ={(event) => onBuybutton(item, event)} 
          ></Item>
          ))}  
  </ul>
    );

};
export default Fooditems;

//{() => console.log(`${item} is bought`) }