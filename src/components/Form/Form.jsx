import React, { useContext } from 'react'
import './Form.css'
import { GenContext } from '../../context/GeneralContext'
import moment from 'moment'

export default function Form() {
    let {addTask,selected}=useContext(GenContext)
  return (
    <form action="" className='container d-flex flex-column'>
        <input id="form-input" type="text" placeholder='Name of the event or task' />
        <input id="date-input" className="date-input" type="date" defaultValue={moment().add(selected,'days').format('yyyy')+'-'+moment().add(selected,'days').format('MM')+'-'+moment().add(selected,'days').format('DD')} />
        <button onClick={()=>addTask()} className='btn bg-light'>Add</button>
    </form>
  )
}
