import { createContext,useState} from "react";
import React from 'react'

export const GenContext=createContext()
const {Provider}=GenContext

export default function GeneralContext({children}) {
  let [form,setForm]=useState(false)

  return (
    <Provider value={{setForm,form}}>
      {children}
    </Provider>
  )
}
