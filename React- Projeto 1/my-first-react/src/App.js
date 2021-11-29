import Item from './components/Item';
import Card from './components/Card';

const App = () => {
  return(
    <>
      <h1>Minha primeira aplicação com React</h1>
      <ul>        
        <Item  texto='Item 1' className='list-group-item list-group-item-action list-group-item-info'/>
        <Item  texto='Item 2' className='list-group-item list-group-item-action list-group-item-danger'/>
        <Item  texto='Item 3' className='list-group-item list-group-item-action list-group-item-dark'/>      
      </ul>
      <Card/>
    </>

  )
}

export default App;