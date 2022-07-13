import './Task.css'
import { GenContext } from '../../context/GeneralContext'
import { useContext } from 'react'

export default function Task({taskName,id,setDoneTasks,done}) {
  let {tasks,setTasks}=useContext(GenContext)
  
  //changes the DONE property at the selected task
  function changeStatus(){
    let clickedTask=tasks.find(task=>task.id==id)
    let index=tasks.indexOf(clickedTask) //search the index of the clicked task
    if (tasks[index].done==false){ //changes the value
      tasks[index].done=true
      setDoneTasks(tasks.filter(task=>task.done==true))
    }else{
      tasks[index].done=false
      setDoneTasks(tasks.filter(task=>task.done==true))
    }
  }
  return (
    <div className='task row align-items-center justify-content-center'>
        <h5 className={done?'col-10 done':'col-10'}>{taskName}</h5>
        <button className='done-btn col-1' onClick={changeStatus}></button>
    </div>
  )
}
