import { useSelector, useDispatch } from "react-redux";
import { changeTaskTitle, deleteTask, editTask, setIsCompleted } from "../toolkit/taskSlice";

const Task = () => {
  const selectedButton = useSelector(state => state.selection.selectedButton);
  const sortType = useSelector(state => state.selection.sortType);
  const dispatch = useDispatch();

  const tasks = useSelector(state => {
    if (selectedButton === 'job') {
      return state.task.tasks.filter(item => item.type === 'job');
    } else if (selectedButton === 'private') {
      return state.task.tasks.filter(item => item.type === 'private');
    } else return state.task.tasks;
  });

  const sortedTasks = [...tasks];

  if (sortType === "date_new") {
    console.log(tasks)
    sortedTasks.sort((a, b) => b.id - a.id);       // у меня в качестве id указан таймстэмп  id: Date.now()
  } else if (sortType === "date_old") {
    sortedTasks.sort((a, b) => a.id - b.id);
  } else if (sortType === "alphabet_AZ") {
    sortedTasks.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortType === "alphabet_ZA") {
    sortedTasks.sort((a, b) => b.title.localeCompare(a.title));
  }

  const changeInput = (id, event) => {
    dispatch(changeTaskTitle({ id, newTitle: event.target.value }));
  }

  const handleDeleteTask = id => {
    dispatch(deleteTask(id));
  };

  const toggle = (id, editMode) => {
    dispatch(editTask(id));
  }

  function todoCompleted(id, isCompleted) {
    dispatch(setIsCompleted({ id, completed: isCompleted }))
  }

  return (<>
    {sortedTasks.map(item => <div className="task-wrap" key={item.id}>
      <input type="checkbox" className='checkbox' checked={item.completed ? true : false}
        onChange={() => todoCompleted(item.id, item.completed)} />
      {item.editMode ? <input value={item.title} onChange={(event) => changeInput(item.id, event)}
        className={item.completed ? "input-task-title decor" : "input-task-title"} /> : <p className={item.completed ? "task-title decor" : "task-title"}>{item.title}</p>}
      <button className="button-edit" onClick={() => toggle(item.id, item.editMode)}>{item.editMode ? "✔" : "✎"} </button>
      <button className="button-close" onClick={() => handleDeleteTask(item.id)}  >✖</button>
    </div>
    )}
  </>)
}

export default Task;