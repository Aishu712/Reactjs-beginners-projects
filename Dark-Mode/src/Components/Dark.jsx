import React,{useState} from 'react'
import "./Dark.css"


const Dark = () => {
  const [mode,setmode] = useState("Dark Mode")
  const [look,setlook] = useState({
    color:"black",
    backgroundColor:"white",
  })
  const changelook = ()=>{
    if(look.color == 'black'){
      setlook({
        color:"white",
        backgroundColor:"black",
        border:"4px solid white"
      })
      setmode("Light Mode")
    }
    if(look.color == 'white'){
      setlook({
        color:"black",
        backgroundColor:"white",
      })
      setmode("Dark Mode")
    }

  }

  return (
    <>
    <div className="container" style={look}>
      <div className="nav" onClick={changelook}><button>{mode}</button></div>
      <div className="card" style={look}>
        <img src="https://cdn.dribbble.com/userupload/12208332/file/original-ac4a0d72e996088da2f3eedaaf8e62fb.gif" alt="girl with vr controller" />
        <h3>Virtual Reality</h3>
        <ul>
          <li>Immersive Experience</li>
          <li>Head-Mounted Display (HMD)</li>
          <li>Motion Controllers</li>
        </ul>
        <button>Try Now!</button>
      </div>
    </div>
    
      
    </>
  )
}

export default Dark