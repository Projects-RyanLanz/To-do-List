import './App.css'

import ListControler from './components/ListControler'

function App() { 

  return (
    <>
      <div className="container container-app">
        <div className="row">
          <div className="col">
            <h3>Lista de afazeres:</h3>
            <ListControler />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
