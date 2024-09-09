import { useState } from "react";
import Allbutton from "./Allbutton";
import styles from "./Buttoncontainer.module.css";

const Buttoncontainer = ({ buttons }) => {


    let [get, setGet] = useState([]);

    let onPress = (item, event) => {
    let newButtons = [...get, item];
    setGet(newButtons);
    console.log(event);
    };
    //const buttonNames = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.'];
    return (
        
<div className= {styles.buttonContainer} >
{buttons.map((item) => (<Allbutton>
    key = {item}
    buttonitem = {item}
    click = {get.indludes(item)}
    handelClickButton = {(event) =>onPress(item, event)}

</Allbutton>
))}
</div>


    );
};
export default Buttoncontainer;