function Hello() {

    //let myName = 'Arwinder Singh';
    let number = 345;
    let fullName = () => {
        return 'Arwinder Singh';
    }
    return <h3>
        No.{number} We Will Meet You  Mr.{fullName()}
        </h3>
}

export default Hello;