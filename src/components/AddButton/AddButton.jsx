import './AddButton.css'
import { useContext } from 'react'
import {GenContext} from '../../context/GeneralContext'

export default function AddButton({}) {
  let {setForm}=useContext(GenContext)
  return (
    <>
    <button onClick={()=>setForm(true)} className='btn btn-add'>
      +
    </button>
    </>
  )
}
