import { useSelector } from "react-redux";

const Displaycounter = () => {

const counter = useSelector((store) => store.counter);    
    return (
        <p class="lead mb-4">Counter Current Value: {counter}</p>
    );
};

export default Displaycounter;