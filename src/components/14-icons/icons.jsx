import React from 'react'
import { MdOutlineFlightTakeoff } from "react-icons/md";
import { ImTicket } from "react-icons/im";

const Icons = () => {
  return (
    <div>
      <MdOutlineFlightTakeoff className='text-danger' style={{fontSize:"1.5rem"}} />
      <ImTicket color='purple' size="70px" />
    </div>
  )
}

export default Icons