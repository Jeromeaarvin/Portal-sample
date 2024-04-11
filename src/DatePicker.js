import React from 'react'
import { useState } from 'react'

function DatePicker() {

    const [date,setDate]=useState();
    console.log("date",date)
  return (
    <div>
        <h2>select date:{date}</h2>
        <input type='date' onChange={(e=>setDate(e.target.value))}></input>
    </div>
  )
}

export default DatePicker