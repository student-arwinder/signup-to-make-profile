import styles from "./Buttoncontainer.module.css";
const Buttoncontainer = () => {

    const buttonNames = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.'];
    return (
        
        <div className={styles.buttonContainer}>

            {buttonNames.map(item=> <button className={styles.button}>{item}</button> )}

    


    
      
    </div>
    );
};
export default Buttoncontainer;