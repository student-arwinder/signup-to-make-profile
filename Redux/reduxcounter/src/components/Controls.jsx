import { useDispatch } from "react-redux";

const Controls = () => {

  const dispatch = useDispatch();

  const handelonincrement = () => {
     dispatch({type: 'INCREMENT'});
  }
  const hanelondecrement = () => {
  dispatch({type: 'DECREMENT'});
  }
    return (
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" class="btn btn-primary" onClick={handelonincrement}>+1</button>
        <button type="button" class="btn btn-success" onClick={hanelondecrement}>-1</button>

      </div>
    );
};
export default Controls