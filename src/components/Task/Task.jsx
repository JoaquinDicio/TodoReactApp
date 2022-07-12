import './Task.css'

export default function Task({taskName,id,tasks,setDoneTasks,done}) {
  function changeStatus(){
    let clickedTask=tasks.find(task=>task.id==id)
    let index=tasks.indexOf(clickedTask)
    if (tasks[index].done==false){
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
