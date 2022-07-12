import './Aside.css'
import Day from '../Day/Day'
import AddButton from '../AddButton/AddButton'
import { useContext,useEffect,useState } from 'react'
import { GenContext } from '../../context/GeneralContext'
import Form from '../Form/Form'

export default function Aside() {
  let {form,days,selected,setSelected}=useContext(GenContext)

  return (
    <>
    <div className="aside-container d-flex row justify-content-center align-items-start">
        <div className="title">
            <h1 className='text-center'>PLANNER</h1>
        </div>
        {form?
        <Form/>
        :
        <>
        <div className="aside-items">
            {days.map((day)=>
            <Day key={day.id} id={day.id}name={day.name} num={day.number} month={day.month} selected={day.id==selected?'selected':''} onClick={setSelected}/>
            )}
        </div>
        <div className="d-flex justify-content-center">
            <AddButton/>    
        </div>
        </>
      }

    </div>
    </>
  )
}
