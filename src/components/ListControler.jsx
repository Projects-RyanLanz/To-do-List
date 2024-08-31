import React , { useState } from 'react'
import Button from './Button'
import List from './List'
import ListElement from './ListElement'

 
import './ListControler.css'

const ListControler = () => {

  const [itens, setItens] = useState([]);
  const [newItem, setNewItem] = useState('');
 
 //Funções
  const addItem = (e) => {
    e.preventDefault();
 
    if(newItem.trim() === '') return;
    
    const newItemContent = {
      id: Date.now(),
      text: newItem
    }

    setItens([...itens,newItemContent])
    setNewItem('');
    //setItens(itens.filter(itens => itens.id !== 1725123606607))
    console.log(itens)
  }

  const subItem = (dado) => {
    setItens(itens.filter(itens => itens.id !== dado))
  }
    
  return (
    <div className="container-list">
        <form action="">
            <label htmlFor="content">Conteudo:</label>
            <input type="text" name='content' id='content' 
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}/>
            <Button text="oi" content={addItem}/>
        </form>
         
        <ul> 
          {itens.map(item => (
            <ListElement key={item.id} id={item.id} text={item.text} action={subItem} />
          ))}
        </ul>
    </div>
  )

  
}

export default ListControler