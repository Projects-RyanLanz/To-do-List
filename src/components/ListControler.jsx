import React , { useState } from 'react'
import Button from './Button' 
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
 
    
  return (
    <div className="container-sm container-list">
      <div className="row">
        <div className="col">
          <form action="">
            <div className="container mb-3">
              <div className="row">
                <div className="col-2">
                  <label htmlFor="content">Conteudo:</label> 
                </div>
                <div className="col-8 text-start">
                  <input type="text" name='content' id='content' className='form-control'
                  value={newItem}
                  onChange={(e) => setNewItem(e.target.value)}/>  
                </div>
                <div className="col-2">
                  <Button text="oi" content={addItem} clas='btn btn-primary btn-md'/>
                </div>
              </div> 
            </div> 
          </form>  
          <ul> 
            {itens.map(item => (
              <ListElement key={item.id} id={item.id} text={item.text} action={setItens} itens={itens}/>
            ))}
          </ul>
        </div>
      </div>
        
    </div>
  )

  
}

export default ListControler