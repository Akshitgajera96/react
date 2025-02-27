import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addvalue = () =>{
    if(count >= 0){
      setCount(count+1)
  }
  else{
    console.log("element is invalid")
  }
  }

  const removeval = () =>{
    if(count > 0){
    setCount(count-1)
  }
  else{
    console.log("element is invalid")
  }
  }
  return(
    <>
    <h1>hello from react</h1>
    <h3>counter</h3>

    
    <button 
    onClick={addvalue}>
    add value {count}</button>&nbsp;&nbsp;&nbsp;
    <button
    onClick={removeval}>
    remove value {count}</button>
    </>
  )
}

export default App
