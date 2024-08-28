import React from 'react'
import Button from './Button'
import List from './List'

import { useState } from 'react'

import './ListControler.css'

const ListControler = () => {

    const print = (e) => {
        e.preventDefault();
        const value = document.getElementById('content').value
        console.log(value)
    }
    
  return (
    <div className="container-list">
        <form action="">
            <label htmlFor="content">Conteudo:</label>
            <input type="text" name='content' id='content'/>
            <Button text='Oi'content={(e) => {print(e)}} />
        </form>
        <List />
    </div>
  )

  
}

export default ListControler