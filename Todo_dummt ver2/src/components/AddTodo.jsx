function AddTodo({handeonClick, displayValue, enterDate}) {
    return(
        <div className="container text-center">
  <div className="row">
    <div className="col-6" ><input type="text"  placeholder="entre the task" value={displayValue}  /></div>
    <div className="col-4"><input type="date" onChange={enterDate}/></div>
    <div className="col-2"><button type="button" className="btn btn-success" onClick={handeonClick}>Success</button></div>
  </div>
  </div>
    );

    
};

export default AddTodo;