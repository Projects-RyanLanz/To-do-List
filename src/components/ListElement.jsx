import React, { useState } from 'react'

import Button from './Button.jsx'

import './ListElement.css'

const ListElement = ({ id, text, action }) => {

   const returnId = () => { 
    action(id);
  }
 

  return(
    <li id={id}>
        <span>{text}</span>
        <input type="text" name="" className="elementInput" />
        <Button text='a' content={returnId} />
     </li>  
  )

}

export default ListElement