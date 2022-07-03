import React from "react";
import './Day.css'
import { GenContext } from '../../context/GeneralContext'

export default function Day({name,num,month,id,selected,onClick}) {

  return (
    <div id={id} className={`row day-aside bg-light align-items-center `+selected} onClick={()=>onClick(id)}>
      <div className="col-9">
        <h4 className="month-name">{name}</h4>
        <p className="day-month">{month}</p>
      </div>
      <h2 className="col-3 number-day">{num}</h2>
    </div>
  );
}
