const Errormessage = ({items}) => {

    //let foodItems = ["dal", "vegges", "carrot", "salad", "ghobi", "ghee "];
    return (
        <>
        {items.length === 0 && <h3>I am still hungry.</h3>}
        </>
    );
};

export default Errormessage;