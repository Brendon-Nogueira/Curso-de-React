//components
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
//img
import Miranha from './assets/miranha.jpg'

//style
import './App.css';



function App() {
  return (
    <div className="App">
      <h1>Avançando no React!</h1>

      <div>
        {/*Utilizando hooks*/}
      <ManageData/>
      </div>
      
       {/*IMG na pasta public*/}
      <div>
      <img src="/miranha1.jpg" alt="imagem do homem aranha" />
      </div>

     {/*IMG na pasta assets*/}
      <div>
      <img src={Miranha} alt="imagem do homem aranha"/>
      </div>

      <div>
        <ListRender/>
      </div>
    </div>

    
  );
}

export default App;
