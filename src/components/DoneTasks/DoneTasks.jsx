import React from 'react'
import Task from '../Task/Task'
import './DoneTasks.css'

export default function DoneTasks({visibleDone,setDoneTasks,done,tasks,setTasks}) {
  function deleteAllTasks(){
    setTasks(tasks.filter(task=>task.done==false))
    setDoneTasks([])
  }
  return (
        (<div className="done-tasks">
            <div className="row done-header">
                <h3 className='col'>Done Tasks</h3>
                <button onClick={()=>deleteAllTasks()} className='btn btn-danger col'>Delete all</button>
            </div>
           {visibleDone.map((task)=>
           <Task done={task.done} setDoneTasks={setDoneTasks} key={task.id} id={task.id} taskName={task.taskName}/>)}
         </div>)
  )
}
