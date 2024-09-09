import { useContext } from "react";

import AppTodo from "./AppTodo";
import styles from "./TodoItem.module.css";
import { TodoItemsContext } from "../store/Todo_items_store";


const TodoItem = () => {


    const {todoItems} = useContext(TodoItemsContext);
    
    
    
    


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