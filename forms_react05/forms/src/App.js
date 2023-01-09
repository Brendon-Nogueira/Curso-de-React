import './App.css';
//components
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">

      <h1>Form React</h1>

      <MyForm  user={{name: 'Brendon Nogueira', email: 'brendonnogueira22@gmail.com' , bio : 'sou dev', role : 'admin'}}/>
      
    </div>
  );
}

export default App;
