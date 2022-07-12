import './Manager.css'
import Task from '../Task/Task'
import { useContext, useEffect,useState } from 'react'
import { GenContext } from '../../context/GeneralContext'
import moment from 'moment'

export default function Manager() {
  let {tasks,selected,setTasks}=useContext(GenContext)
  let [visibleTasks,setvisibleTasks]=useState([])
  let [visibleDone,setVisibleDone]=useState([])
  let [doneTasks,setDoneTasks]=useState([])
  useEffect(()=>{
    setvisibleTasks(tasks.filter((task)=>
    task.taskDate==moment().add(selected,'days').format('yyyy')+'-'+moment().add(selected,'days').format('MM')+'-'+moment().add(selected,'days').format('DD')&&task.done==false
    ))
    setVisibleDone(
      doneTasks.filter((task)=>
        task.taskDate==moment().add(selected,'days').format('yyyy')+'-'+moment().add(selected,'days').format('MM')+'-'+moment().add(selected,'days').format('DD')
      )
    )
  },[selected,tasks,doneTasks])
  return (
    <div className='manager d-flex flex-column'>
        <div className="header d-flex align-items-center justify-content-start">
            <h2 className='text-center active'>My tasks</h2>
            <div className='divider'></div>
            <h2 className='text-center'>Events</h2>
        </div>
        <div className="tasks-events">
          {
            visibleTasks.length==0?
            <div>
            <h3 className='empty-msg'>No tasks added...</h3>
            </div>
            :
            visibleTasks.map((task)=>
            <Task done={task.done} setTasks={setTasks} setDoneTasks={setDoneTasks} key={task.id} tasks={tasks} id={task.id} taskName={task.taskName}/>)
          }
        </div>
        {
          doneTasks.length>0?
          (<div className="task-events">
            {visibleDone.map((task)=>
            <Task done={task.done} setTasks={setTasks} setDoneTasks={setDoneTasks} key={task.id} tasks={tasks} id={task.id} taskName={task.taskName}/>)}
          </div>):
          <></>
        }
    </div>
  )
}
