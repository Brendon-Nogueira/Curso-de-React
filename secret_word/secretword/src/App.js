//style
import './App.css';
//React hooks
import {useCallback, useEffect, useState} from 'react';
//components
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';
//data
import {wordsList} from './data/words';


const stages = [
  {id: 1, name: 'start'},
  {id: 2, name: 'game'},
  {id: 3, name: 'end'},
  
]

function App() {

  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList)

  // funções que alteram o stage do jogo
  const start = () =>{
    setGameStage(stages[1].name)
  }

  const retryAgain = () =>{
    setGameStage(stages[0].name)
  }

  // função que verifica as letras digitadas pelo úsuario
  const verifyLetter = () =>{
    setGameStage(stages[2].name)
  }


  //console.log(words)
  return (
    <div className="App">
      {gameStage === 'start' &&  <StartScreen  start={start}/>}
      {gameStage === 'game' &&  <Game verifyLetter={verifyLetter} />}
      {gameStage === 'end' &&  <GameOver retryAgain={retryAgain}/>}
      
    </div>
  );
}

export default App;
