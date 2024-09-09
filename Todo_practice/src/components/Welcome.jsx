import { useContext } from "react";
import styles from "./Welcome.module.css";

const {todoItems} = useContext(Contextapi);
const Welcome = () => {
    return  todoItems.length === 0 && <p className={styles.welcome}>Enjoy Your Day</p>
};

export default Welcome;

