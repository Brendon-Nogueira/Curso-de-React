import './App.css';
import {useState} from 'react'

//components
import MyComponent from './components/MyComponent';
import Title from './components/Title'

function App() {

  const x = 15
  const [name] = useState('Brendon')


 // const redTitle =   true
    const redTitle =   false

  return (
    <div className="App">
      {/*  CSS GLOBAL  /*/}
     <h1>React com CSS</h1>
      {/*  CSS COMPONENT /*/}
      <MyComponent/>
     <p>Este conteúdo é do App.js</p>
      {/*  CSS INLINE /*/}
      <p style={{color: 'purple', padding: '25px', borderTop: '2px solid purple'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Asperiores neque iusto molestias dolor? 
        Assumenda, ad rem quisquam necessitatibus qui, 
        possimus aliquam eveniet quia labore sequi illo et libero 
        odio ut.
      </p>

       {/*  CSS INLINE DINÂMICO/*/}
      <p style={x < 10 ? ({color: 'red'}) : ({color: 'blue'}) }> CSS INLINE DINÂMICO</p>
      <p style={x > 10 ? ({color: 'red'}) : ({color: 'blue'}) }> CSS INLINE DINÂMICO</p>
      <p style={name === 'Brendon' ? {color: 'green'} : null}> CSS INLINE DINÂMICO</p>

       {/*  CLASSES CSS DINAMICO/*/}
      <h2 className={ redTitle ? 'red-title' : 'title'}>Este título vai ter classe dinâmica</h2>

       {/* CSS MODULES/*/}
      <Title/>



     
    </div>
  );
}

export default App;
