import styles from "./TodoItems.module.css";
import AppTodo from "./AppTodo";
const TodoItmes = ({todoValue}) => {
    return (
        <div className={styles.startxt}>
        {todoValue.map((item) => {
            <AppTodo todoName={item.name} todoDate={item.dueDate}></AppTodo>
        })}
    </div>
    );

    
}

export default TodoItmes;