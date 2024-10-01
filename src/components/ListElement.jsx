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
 
    fetch("http://localhost:3000/task/"+id,{
      method:'DELETE'
    })
    .then((response) => {response.json()
    action(itens.filter(itens => itens.id !== id))})
    .catch((error)=> {console.log(error+"aa")}) 
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

      action(itens.map(item => item.id  === id ? {...item, description: inputElement.value} : item))

      fetch('http://localhost:3000/task/'+id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json', // Define o tipo de conteúdo como JSON
        },
        body: JSON.stringify({ description: inputElement.value }), // Converte o objeto para JSON
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro na requisição');
        }
        
        return response.json(); // Retorna a resposta em JSON
      }) 
      .catch(error => {
        console.error('Erro:', error); 
      });

      
    }
  }

  const updateState = (value)=>{
    const rowElement = document.getElementById(`${id}`)


    fetch('http://localhost:3000/task/'+id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json', // Define o tipo de conteúdo como JSON
      },
      body: JSON.stringify({ completed: value }), // Converte o objeto para JSON
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro na requisição');
      }
      value == true ? rowElement.classList.add('completed') : rowElement.classList.remove('completed')

      return response.json(); // Retorna a resposta em JSON
    }) 
    .catch(error => {
      console.error('Erro:', error); 
    });

  }

  return(
    <li id={id} style={{paddingBottom:'1rem'}}>
      <div className="container">
        <div className="row">
          <div className="col-7">
            <span>{text}</span>
            <input type="textBox" name="" className="hidden form-control" />
          </div>
          <div className="col-1">
            <input type="checkbox" id="" onChange={(e) => updateState(e.target.checked)} />
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