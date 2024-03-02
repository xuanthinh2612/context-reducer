import { useRef } from 'react';
import {} from './App.css'
import {actions, useStore} from './store';


function App() {

  const {state, dispatch} = useStore()


  const {job, jobs} = state

  const inputRef = useRef()

  const handleAdd = ()=> {
    dispatch(actions.addJob())
    inputRef.current.focus()
  }

  return (
    <div className="App m-5">
      <h1>TODO APP</h1>

      <input
        ref={ inputRef }
        value={job}
        onChange={e => dispatch(actions.setJob(e.target.value))}></input>
      
      <button className="btn btn-outline-success m-2"
        onClick={handleAdd}
        >Add</button>

      <div className='m-5'>
        <ul>
          {jobs.map((job, index) => {
            return(
              <li key={index}>{job}</li>
            )
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
