import React, { useState } from 'react'

import Button from './Button.jsx'

import './ListElement.css'

const ListElement = ({ id, text, action, itens }) => {

  /*const returnId = () => { 
    action(id);
  }
  */
  const[text_,setText] = useState(text)

  const subItem = (e) => {
    e.preventDefault();
    action(itens.filter(itens => itens.id !== id));
  }

  const editItem = (e) => {
    e.preventDefault();
    const rowElement = document.getElementById(`${id}`)

    const inputElement = rowElement.querySelector('input')
    const spanElement = rowElement.querySelector('span')

    if(inputElement.classList.contains('hidden')){
      inputElement.classList.remove('hidden')
      spanElement.classList.add('hidden')
      inputElement.value = text;
    }else{
      inputElement.classList.add('hidden')
      spanElement.classList.remove('hidden')
      action(itens.map(item => item.id  === id ? {...item, text: inputElement.value} : item))
    }
  }

  return(
    <li id={id} style={{paddingBottom:'1rem'}}>
      <div className="container text-start">
        <div className="row">
          <div className="col-8">
            <span>{text}</span>
            <input type="textBox" name="" className="hidden form-control" />
          </div>
          <div className="col-2">
            <Button text='Editar' content={editItem} clas='btn btn-primary' />
          </div>
          <div className="col-2">
            <Button text='Deletar' content={subItem} clas='btn btn-danger'/> 
          </div>
        </div>
      </div> 
     </li>  
  )

}

export default ListElement