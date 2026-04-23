import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from '../src/comp/Login'
import Profile from '../src/comp/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      {/* <h1 className='flex justify-center items-center bg-stone-300 h-100 w-100 p-4 mx-140 my-50'>Welcome to Vite</h1> */}
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
