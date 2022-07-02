import './Manager.css'
import Task from '../Task/Task'

export default function Manager() {
  return (
    <div className='manager d-flex flex-column'>
        <div className="header d-flex align-items-center justify-content-start">
            <h2 className='text-center active'>My tasks</h2>
            <div className='divider'></div>
            <h2 className='text-center'>Events</h2>
        </div>
        <div className="tasks-events">
          <Task></Task>
          <Task></Task>
        </div>
    </div>
  )
}
