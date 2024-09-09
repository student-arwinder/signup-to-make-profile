import styles from "./Buttoncontainer.module.css";
const Buttoncontainer = ({poop}) => {

    const buttonNames = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.'];
    return (
        
        <div className={styles.buttonContainer}>

            {buttonNames.map((item)=> 
            <button className={styles.button} onClick={() => poop(item)}>{item}</button> )}

    


    
      
    </div>
    );
};
export default Buttoncontainer;