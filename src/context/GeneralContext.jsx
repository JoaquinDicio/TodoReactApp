import {React,useEffect,createContext,useState} from 'react'
import moment from "moment";
export const GenContext=createContext()
const {Provider}=GenContext

export default function GeneralContext({children}) {
  //set days
  let [days,setDays]=useState([])
  useEffect(()=>{
    let newDays=[]
      for(let i=-2;i<=2;i++){
          newDays=[...newDays,
          {name:moment().add(i,'days').format('dddd'),
          number:moment().add(i,'days').format('DD'),
          month:moment().add(i,'days').format('MMM'),
          id:i}]
      }
    setDays([...newDays])
    },[])
  //establish the selected day
  let [selected,setSelected]=useState(0)
  //form to add events & tasks
  let [form,setForm]=useState(false)
  //storage of events and tasks
  let [tasks,setTasks]=useState([])

  //function to add a task
  function addTask(){
    let name=document.querySelector('#form-input').value
    let date=document.querySelector('#date-input').value
    setForm(false)
    setTasks([{taskName:name,taskDate:date,id:tasks.length,done:false},...tasks])
  }

  return (
    <Provider value={{setForm,form,addTask,tasks,days,selected,setSelected,setTasks}}>
      {children}
    </Provider>
  )
}
