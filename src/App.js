import Input from "./compoonents/Input";
import Task from "./compoonents/Task";
import Selection from "./compoonents/Selection";

function App() {
    return (
        <div className='App'>
          <h1 className='main-title'>To-do List for <span>girls</span> </h1>
          <Input />
          <Selection/>
          <Task/>
        </div>
      )
}

export default App;
