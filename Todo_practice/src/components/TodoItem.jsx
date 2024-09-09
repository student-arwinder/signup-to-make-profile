import { useContext } from "react";
import AppTodo from "./AppTodo";
import styles from "./TodoItem.module.css";
const TodoItem = () => {


    const {todoItems} = useContext(Contextapi);
    return (
        <div className={styles.itemsContainer}>
            {todoItems.map(item =>
             <AppTodo
             key={item.name}
             todoDate={item.dueDate}
             todoName={item.name}
             >
             </AppTodo>)}
    
    </div>
    
    );
    
};
export default TodoItem;