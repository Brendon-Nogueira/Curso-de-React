
//img
import Miranha from './assets/miranha.jpg'

//style
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Avançando no React!</h1>
      
       {/*IMG na pasta public*/}
      <div>
      <img src="/miranha1.jpg" alt="imagem do homem aranha" />
      </div>
     {/*IMG na pasta assets*/}
      <div>
      <img src={Miranha} alt="imagem do homem aranha"/>
      </div>
    </div>
  );
}

export default App;
