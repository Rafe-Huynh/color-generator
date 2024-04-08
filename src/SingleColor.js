import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb,weight,index, hexColor}) => {
  const [alert, setAlert] = useState(false)
  const bcg = rgb.join(',') // serperate the ,
  const hex = rgbToHex(...rgb) // another way to show hex value using function
  useEffect(()=>{
    const timeout = setTimeout(() =>{
      setAlert(false)
    },3000 ) // set alert back to false after 3 sec
    return () => clearTimeout(timeout)
  },[alert])
  return <article className={`color ${index > 10 && 'color-light'}`} style={{backgroundColor: `rgb(${bcg})`}} onClick={() => {setAlert(true) 
  navigator.clipboard.writeText(hexColor)}}>
    <p className='percent-value'> {weight}%</p>
    <p className='color-value'>#{hexColor}</p>
    {alert && <p className='arlert'> copied the color</p>}
  </article>
}

export default SingleColor
