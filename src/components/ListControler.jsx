import React , { useState } from 'react'
import Button from './Button'
import List from './List'
import ListElement from './ListElement'

 
import './ListControler.css'

const ListControler = () => {

  const [itens, setItens] = useState([]);
  const [newItem, setNewItem] = useState('');
 
 
  const addItem = (e) => {
    e.preventDefault();
 
    if(newItem.trim() === '') return;
    
    const newItemContent = {
      id: Date.now(),
      text: newItem
    }

    setItens([...itens,newItemContent])
    setNewItem('');

    console.log(itens)
  }
    
  return (
    <div className="container-list">
        <form action="" onSubmit={addItem}>
            <label htmlFor="content">Conteudo:</label>
            <input type="text" name='content' id='content' 
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}/>
            <button type='submit'>Oi</button>
        </form>
        <ul> 
          {itens.map(item => (
            <ListElement key={item.id} id={item.id} text={item.text} />
          ))}
        </ul>
    </div>
  )

  
}

export default ListControler