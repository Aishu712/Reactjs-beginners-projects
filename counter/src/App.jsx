import { useState } from 'react'
import './App.css'

function App() {
  const [count,setcount]=useState(0)
 
  return (
    <>
      <div className="container">
        <h3 className='counter'>Counter: {count}</h3>
        <div className="buttons">
        <button onClick={()=>{
            setcount(count+1)
        }} >Increase</button>
        <button onClick={()=>{
          {count<=0 ? setcount(0) : setcount(count-1)}
        }}>Decrease</button>
        <button onClick={()=>{
           setcount(0)
        }}>Reset</button>
        </div>
      </div>
    </>
  )
}

export default App
