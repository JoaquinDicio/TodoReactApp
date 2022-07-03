import './Task.css'

export default function Task({taskName}) {

  return (
    <div className='task row align-items-center justify-content-center'>
        <h5 className='col-10'>{taskName}</h5>
        <button className='done-btn col-1'></button>
    </div>
  )
}
