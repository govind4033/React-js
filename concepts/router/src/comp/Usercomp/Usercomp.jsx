import React from 'react'
import { useParams } from 'react-router-dom'

function Usercomp() {
    const {user} = useParams();
  return (
    <div className='bg-stone-300 min-h-100 flex items-center justify-center'>
        <h1 className='text-2xl font-bold text-center mt-10'>User Name : {user}</h1>
    </div>
  )
}

export default Usercomp