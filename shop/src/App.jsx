import { useState } from 'react'
import List from './Components/List'
import './App.css'
function App() {
  const [selected, setSelected] = useState(0)
  const fruits = [{id:9, name:"pineapple",calories:48},
                  {id:2, name:"banana",calories:346},
                  {id:10, name:"watermelon",calories:46},
                  {id:7, name:"papayas",calories:39},
                  {id:3, name:"jackfruit",calories:92},
                  {id:5, name:"kiwi",calories:61},
                  {id:6, name:"apple",calories:52},
                  {id:1, name:"guavas",calories:36},
                  {id:8, name:"oranges",calories:47},
                  {id:4, name:"grapes",calories:67},
                 
  ]

  return (
    <>
      <div className="container">
        <div className="buttons">
          <button onClick={()=>{setSelected(1)}}>Sort-Alphabetical</button>
          <button onClick={()=>{setSelected(2)}}>Sort- Reverse Alphabetical</button>
          <button onClick={()=>{setSelected(3)}}>Sort Calories</button>
          <button onClick={()=>{setSelected(4)}}>Sort Calories Desc</button>
        </div>
        <div className="content">
          <List items={fruits} selected={selected}></List>
        </div>
      </div>
    </>
  )
}

export default App
