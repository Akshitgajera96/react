import { useState } from 'react'
import Templet from './components/templet.jsx'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 m-3 p-4 rounded-xl'>hello</h1>
      <Templet name="emberled" price='$200.00' instock='no avilable'/>
      <Templet />
    </>
  )
}

export default App
