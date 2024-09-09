import AppTodo from "./AppTodo";
import styles from "./TodoItem.module.css";
const TodoItem = ({todoItems, onDeleteClick}) => {


    return (
        <div className={styles.itemsContainer}>
            {todoItems.map(item =>
             <AppTodo
             key={item.name}
             todoDate={item.dueDate}
             todoName={item.name}
             onDeleteClick={onDeleteClick} >
             </AppTodo>)}
    
    </div>
    
    );
    
};
export default TodoItem;