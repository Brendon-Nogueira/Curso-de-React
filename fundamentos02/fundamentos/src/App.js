// components
import FirstComponent  from './components/FirstComponent';
import TemplateExpressions from './components/TemplateExpressions';
import MyComponent from './components/MyComponent';
import EventComponent from './components/EventComponent';
import Challenge from './components/Challenge';
// import do Style
import './App.css';





function App() {
  return (
    <div className="App">
      <h1>Aprendendo os fundamentos do REACT</h1>
      <FirstComponent/>
      <TemplateExpressions/>
      <MyComponent/>
      <EventComponent/>
      <Challenge/>      
    </div>
  );
}

export default App;
