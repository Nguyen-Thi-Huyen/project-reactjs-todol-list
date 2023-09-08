import { SET_JOB, ADD_JOB, DELETE_JOB ,MODIFIED_JOB } from "./constants"

// 1. init state
const Getstoreage = () => {
  const  storageJobs = JSON.parse(localStorage.getItem('lists'));
  console.log('Storage jobs',storageJobs)
  if(storageJobs) return storageJobs
  else return []
}

export const initState = {
    job : '',
    jobs : Getstoreage(),
    isEdit : false,
    currentJob : '',

  }
  
  
  //3. Reducer
  //state là giá trị khởi tạo của useReducer, sau khi nhập thì state sẽ băng giá trị vừa nhập
  const reducer = (state,action) => {
    console.log('vào day')
    console.log('Action',action.payload)
    console.log('PrevState',state)

    let newState 
    switch(action.type){
      case SET_JOB:
        newState = {
          ...state,
          job : action.payload
        }
        break
      case ADD_JOB:
        newState = {
          ...state,
          jobs : [...state.jobs, action.payload]
        }
        break
      case DELETE_JOB:
        const newJob = [...state.jobs]
        newJob.splice(action.payload,1)
        newState = {
          ...state,
          jobs : newJob
        }
        break
      case MODIFIED_JOB:
        console.log(state.jobs,'state.jobs');
        const currentJob = state.jobs[action.payload]

       return newState = {
          ...state,
          currentJob : currentJob,
          isEdit : true
        }

      default:
        throw new Error('Invalid action type')
    }
    console.log('New state:', newState)
    localStorage.setItem('jobs',JSON.stringify(newState))
    return newState
  }
  export default reducer