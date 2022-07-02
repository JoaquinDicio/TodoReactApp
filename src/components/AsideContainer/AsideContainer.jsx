import React from 'react'
import Aside from '../Aside/Aside'
import {useState,useEffect} from 'react'
import moment from 'moment'

export default function AsideContainer() {
    let [days,setDays]=useState([])

    useEffect(()=>{
        let newDays=[]
        for(let i=0;i<=4;i++){
            newDays=[...newDays,{name:moment().add(i,'days').format('dddd'),number:moment().add(i,'days').format('DD'),month:moment().add(i,'days').format('MMM')}]
        }
        setDays([...newDays])
    },[])
console.log(days)
  return (
    <>
    <Aside days={days}/>
    </>
    
  )
}
