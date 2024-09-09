import styles from "./Item.module.css";

const Item = ({foodItem, bought, handelBuybutton}) => {

    

    //const handelOnClicked = (event) => {
        //console.log(event);
       // console.log(`${foodItem} is being bought`);}




return (
    <li className={`${styles['kg-item']} list-group-item ${bought && "active"}`}>
    <span className={styles['kg-span']}>{foodItem}</span> 
    <button className={`${styles.button} btn btn-info`}  
    onClick = {handelBuybutton}
    >Buy</button></li>
    
     
);
}
export default Item;