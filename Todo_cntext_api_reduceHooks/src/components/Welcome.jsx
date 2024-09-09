import { useContext } from "react";
import { TodoItemsContext } from "../store/Todo_items_store";
import styles from "./Welcome.module.css";
const Welcome = () => {

    const {todoItems} = useContext(TodoItemsContext);
    
    return ( todoItems.length === 0 && <p className={styles.welcome}>Enjoy your day</p>
    );
};

export default Welcome;

