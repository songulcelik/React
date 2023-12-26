import React, { useState } from 'react'
import { Button } from 'react-bootstrap';

const State = () => {

  const [mode,setMode] = useState("dark")

    let classes="bg-dark text-light";

    if(mode==="light"){
      classes="bg-light text-dark";
    }

    const setClasses = (mode) => {
      if(mode==="dark"){
        classes="bg-dark text-light";
      }else{
        classes="bg-light text-dark";
      }
    }
    

  return (
    <div className={classes}>
        <h1 className='text-center'>Dark/Light Switcher</h1>
        <div className='d-flex justify-content-center gap-3 mt-5'>
            <Button onClick={()=>setMode("dark")}>Dark Mode</Button>
            <Button  onClick={()=>setMode("light")}>Light Mode</Button>
        </div>
    </div>
  )
}

export default State;