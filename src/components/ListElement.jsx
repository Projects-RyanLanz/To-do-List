import React from 'react'

import Button from './Button.jsx'

import './ListElement.css'

const ListElement = ({ id, text }) => {
  return (
    <li id={id}>
        <span>{text}</span>
        <input type="text" name="" className="elementInput" />
        <Button text='a'/>
        <Button text='b'/>
    </li>  
  )
}

export default ListElement