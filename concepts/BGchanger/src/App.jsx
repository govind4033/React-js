import { useState } from 'react'
import './App.css'

function App() {
  let [color, setColor] = useState('bg-gray-300')
  return (
    <>
      <div className={`w-full h-screen flex items-center justify-center ${color}`}>
        <div className='flex gap-4'>
          <button onClick={() => setColor('bg-gray-300')} className='px-4 py-2 bg-gray-500 text-white rounded'>Gray</button>
          <button onClick={() => setColor('bg-red-300')} className='px-4 py-2 bg-red-500 text-white rounded'>Red</button>
          <button onClick={() => setColor('bg-green-300')} className='px-4 py-2 bg-green-500 text-white rounded'>Green</button>
          <button onClick={() => setColor('bg-blue-300')} className='px-4 py-2 bg-blue-500 text-white rounded'>Blue</button>
        </div>
      </div>
    </>
  )
}

export default App
