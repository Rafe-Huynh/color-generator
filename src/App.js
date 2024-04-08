import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [list, setList] = useState(new Values('#222').all(10) ) // all generate all the shade and weight devide 100% by 10

  const handleSubmit = (e) =>{
    e.preventDefault()
    try{
      let colors = new Values(color).all(10)
      setList(colors)
    }catch (error){
      setError(true)
        alert("color does not exist")
    }
   
  }
  return(
    <div>
    <section className='container'> 
    <h3>Color Generator</h3>
    <form onSubmit={handleSubmit}>
      <input type="text" value={color} onChange={(e) => setColor(e.target.value)} placeholder='Enter Hex value' classname={`${error ? 'error' : null }`}></input> 
      <button className="btn" type="submit"> submit </button>
       </form>
    </section>
    <section className='colors'>
      {list.map((color, index) =>{

        return <SingleColor key = {index} {...color} index={index} hexColor ={color.hex} />
      })}
    </section>
    </div>
  )
}

export default App
