import styles from "./FoodInput.module.css";
const FoodInput = ({handelKeyDown}) => {

   // const handelOnchange = (event) => {
       // console.log(event.target.value)
    //}
    
    
    return(
    <
        input type="text" placeholder="Enter name of item"
     className={styles.foodInput} 
     //onChange = {handelOnchange}
     onKeyDown={handelKeyDown}
     />
    );
};

export default FoodInput;