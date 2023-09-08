
import { useState } from "react";

// //SỬ DỤNG USESTATE ĐỂ THỰC HIỆN NHẬP VÀ IN RA THÔNG TIN 
// function App() {
 
  
//   const [job, setJob] = useState('')
//   const [jobs,setJobs] = useState((() =>{
//     const storageJobs = JSON.parse(localStorage.getItem('jobs'));
//     console.log('Storage jobs',storageJobs)
//     if(storageJobs) return storageJobs
//     else return []
//   }) );
//   // console.log(job)
//   const handleSubmit = () =>{
//    // console.log('vao da7')
//     setJobs(prev => { 
//       const newJobs = [...prev,job]
//       //save to local storage
//       localStorage.setItem('jobs',JSON.stringify(newJobs))
//       return newJobs
//     })
//     setJob('')
//   }
//   return(
//     <div style={{padding : 50}}>
//       <input 
//       value={job }
//       onChange={e => setJob(e.target.value)}
//       />
//       <button onClick={handleSubmit}>Add</button>
//       <ul>
        
//         {
//         jobs?.map((job,index) => (
//           <li key={index}>{job}</li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default App;

// SỬ DỤNG REDUCER ĐỂ NHẬP VÀ IN RA THÔNG TIN
//note: cả useState và useReducer đều có thể làm được, tuy nhiên với những logic phức tạp, 
//đòi hỏi nhiều component thì chúng ta nên sử dụng useReducer


//---------------------- VÍ DỤ 2: BÀI TOÁN NHẬP VÀ RENDER RA CÔNG VIỆC, XÓA CÔNG VIỆC----------------------------------------------------------------

import TodoApp from './Todo'
function App() {
  return <TodoApp />
}
export default App