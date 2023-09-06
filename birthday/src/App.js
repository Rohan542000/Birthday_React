import React, { useState } from 'react'
import Data from './Data'
import './index.css'
const App = () => {
    const[data,setData]=useState(Data)
  return (
    <div className='outer-container'>
    <div className='main-container'>
      <p> Today's Birthday {data.length}🎂🎂</p>
      {data.map((x)=>{
        return(
            <div className='cards'>
                <h1>{x.id}</h1>
                <p>{x.name}</p>
                <p>{x.age}</p>
                <img src={x.image} alt='' height={"50px"} width={"50px"}></img>
            </div>
        )

      })}
      <button onClick={()=>setData([])}>Clear</button>
    </div>
    </div>
  )
}

export default App