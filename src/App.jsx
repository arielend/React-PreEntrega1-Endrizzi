import './App.css'
import Header from './components/Header/Header'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
    
  return (
    <>
      <div className="main">

        <Header/>
        
        <ItemListContainer
          greeting={'Este es el ítem elegido.'}
          greetingStyle={{color: 'yellow', fontSize: 30}}
        />
      
      </div>

    </>
  )
}

export default App
