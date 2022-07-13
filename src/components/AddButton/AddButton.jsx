import './AddButton.css'
import { useContext } from 'react'
import {GenContext} from '../../context/GeneralContext'

export default function AddButton({}) {
  let {setForm}=useContext(GenContext)
  return (
    <>
    <button onClick={()=>setForm(true)} className='btn btn-add'> 
    {/* shows the form to add a task */}
      +
    </button>
    </>
  )
}
