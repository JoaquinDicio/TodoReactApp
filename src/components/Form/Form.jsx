import React, { useContext } from 'react'
import './Form.css'
import { GenContext } from '../../context/GeneralContext'

export default function Form() {
    let {setForm}=useContext(GenContext)
  return (
    <form action="" className='container d-flex flex-column'>
        <input type="text" placeholder='Name of the event or task' />
        <button onClick={()=>setForm(false)} className='btn bg-light'>Add</button>
    </form>
  )
}
