import React , { useEffect, useState } from 'react'
import Button from './Button' 
import ListElement from './ListElement'

 
import './ListControler.css'

const ListControler = () => {

  const [itens, setItens] = useState([]);
  const [newItem, setNewItem] = useState(''); 

 //Funções  
  //POST
  const addItem = (e) => {
    e.preventDefault();
   
    fetch('http://localhost:3000/task', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Define o tipo de conteúdo como JSON
      },
      body: JSON.stringify({ description: newItem }), // Converte o objeto para JSON
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro na requisição');
      }
      return response.json(); // Retorna a resposta em JSON
    })
    .then(data => { 
      const newItemContent = {
        id: data.id,
        description: newItem
      } 
      console.log(data); // Log para verificar a resposta 
      setItens([...itens,newItemContent])
    })
    .catch(error => {
      console.error('Erro:', error); 
    });
 
    setNewItem('');
    //setItens(itens.filter(itens => itens.id !== 1725123606607))
    console.log(itens) 
  }
   
  //GET
  useEffect(()=>{
    fetch("http://localhost:3000/task",{
      method: 'GET',  
    }) 
    .then((response) => response.json())
    .then((data) => {    
      setItens(data)
      console.log(data[0]);    
    })
    .catch((error) => {console.log(error+"aa")});
  },[])  

    
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
              <ListElement key={item.id} id={item.id} text={item.description} action={setItens} itens={itens}/>
            ))}
           </ul>
        </div>
      </div> 
        
    </div>
  )

  
}

export default ListControler