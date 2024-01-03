import React from 'react'
import { useParams } from 'react-router-dom'
const Useparams = () => {
    const {id} = useParams();
  return (
    <div>
        Url den gelen parametreyi alabilmek icin useParams hook u kullanilir: {id}
    </div>
  )
}
export default Useparams