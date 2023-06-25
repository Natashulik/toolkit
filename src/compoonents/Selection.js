import { useSelector, useDispatch } from "react-redux";
import { setSelectSort, pressButton } from "../toolkit/selectionSlice";

const Selection = () => {
  const selectedButton = useSelector(state => state.selection.selectedButton);
  const dispatch = useDispatch();

  const handleButton = type => {
    dispatch(pressButton(type))
  }

  const handleSort = (event) => {
    dispatch(setSelectSort(event.target.value))
  }
  return (
    <>
      <button className={`button-all ${selectedButton === "all" ? "selected" : ""}`}
        onClick={() => handleButton("all")}> all tasks </button>
      <button className={`button-private ${selectedButton === "private" ? "selected" : ""}`}
        onClick={() => handleButton("private")}> private </button>
      <button className={`button-job ${selectedButton === "job" ? "selected" : ""}`}
        onClick={() => handleButton("job")} >job</button>
      <select className='select' onChange={handleSort} defaultValue="default">
        <option value="default" disabled >Sort</option>
        <option value='date_new'>date (new to old)</option>
        <option value='date_old'>date (old to new) </option>
        <option value='alphabet_AZ'>alphabet (a-z)</option>
        <option value='alphabet_ZA'>alphabet (z-a)</option>
      </select>
    </>

  )
}

export default Selection;