import { useSelector, useDispatch } from "react-redux";
import { setNewTask} from "../toolkit/taskSlice";
import { setIsEmpty, setInputText } from "../toolkit/inputSlice";

const Input = () => {
  const isEmpty = useSelector(state => state.input.isEmpty);
  const text = useSelector(state => state.input.text);
  const selectedButton = useSelector(state => state.selection.selectedButton);
  const dispatch = useDispatch();

  function onChange(event) {
    dispatch(setInputText(event.target.value))
  }

  const handleClick = () => {
    if (text) {
      const newTask = { id: Date.now(), title: text, type: selectedButton, completed: false, editMode: false };
      dispatch(setNewTask(newTask));
      dispatch(setInputText(''));
      dispatch(setIsEmpty(false));
    } else {
      dispatch(setIsEmpty(true));
    }
  }

    return (
      <div className='new-task_block'>
        <input className='new-task' value={text} onChange={onChange} placeholder={isEmpty ? 'Add task' : ''}/>
        <button className='button-add' onClick={handleClick}>Add</button>
      </div>
    )
  }
  
  export default Input;