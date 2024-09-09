import styles from "./Buttoncontainer.module.css";
const Allbutton = ({buttonitem, click, handelClickButton}) => {
    return(
        <button 
      className={`${styles.button} ${click && "active"}`}
       onClick={handelClickButton}
       >{buttonitem}
</button>
    );
}
export default Allbutton;