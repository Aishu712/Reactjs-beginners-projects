import React,{useState,useEffect} from 'react'
import "./Clock.css"

const Clock = () => {
  const [time,setTime] = useState(new Date())
  useEffect(()=>{
    const storing = setInterval(()=>{
         setTime(new Date())
    },1000)
    return ()=>{
         clearInterval(storing);
    }
  },[])
  function addzero(number){
    if(number >=10){
      return number
    }
    else{
      return `0${number}`
    }

  }
  function getTime(){
    let it = ""
    let hours = time.getHours()  
    let minutes = time.getMinutes()
    let seconds = time.getSeconds()
    if(hours > 12){
      hours = hours % 12 || 12
      return `${addzero(hours)} : ${addzero(minutes)} : ${addzero(seconds)}  PM ` 
    }
    else{
      hours = hours % 12 || 12
      return `${addzero(hours)} : ${addzero(minutes)} : ${addzero(seconds)}  AM `
      
    }
    
    
  }
  return (
    <>
    <div className="clock-wrapper">
      <div className="clock-container">
        <span>{getTime()}</span>
      </div>
    </div>
    </>
  )
}

export default Clock