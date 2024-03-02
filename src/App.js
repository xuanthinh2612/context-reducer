import {} from './App.css'
import {actions, useStore} from './store';


function App() {

  const {state, dispatch} = useStore()


  const {job, jobs} = state


  return (
    <div className="App m-5">
      <h1>TODO APP</h1>

      <input
        value={job}
        onChange={e => dispatch(actions.setJob(e.target.value))}></input>
      
      <button className="btn btn-outline-success m-2"
        onClick={()=> dispatch(actions.addJob())}
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
