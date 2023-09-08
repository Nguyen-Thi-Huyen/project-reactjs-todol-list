import { useReducer, useRef,useEffect } from "react";
import reducer,{initState} from './reducer'
import {setJob, addJob,deleteJob, modifiedJob} from './actions'

import './index.css'



function App() {
  const [state, Dispatch] = useReducer(reducer,initState);
  const {job,jobs , isEdit , currentJob}=state;
 
  const inputRef = useRef()

  const handleSubmit = () => {
    Dispatch(addJob(job))
    Dispatch(setJob(''))
    inputRef.current.focus()
  }
  console.log(isEdit , 'isEdit' , currentJob);
  useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(jobs))
  }, [jobs]);


  useEffect(() => {
    console.log('nghia');
   Dispatch(setJob(currentJob))
  },[currentJob])

  const handleUpdateToDo = (index) => {
    console.log(index);
    Dispatch(modifiedJob(index))
  }
  return (
    <div className="container-todo">
      <h1 className="heading">What is your job today?</h1>
      <div>
      <input 
      className="input-todo"
      placeholder="Add a todo"
      ref={inputRef}
      value= { job}
      onChange={e => {
        Dispatch(setJob(e.target.value))
      }}
      />
      <button className="btn-add" onClick={handleSubmit}>Add</button>
      </div>
      
      <div className="item-todid">
        {
          jobs.map((job,index) => (
            <div className="item-todo" key={index}>
              <div>{job}</div>
              
              <div>
                <i className="fa fa-times" aria-hidden="true" onClick={() => Dispatch(deleteJob(index))}/>
                <i className=" icon-modified fa fa-pencil-square-o" aria-hidden="true" onClick={() =>handleUpdateToDo(index)}/>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default App