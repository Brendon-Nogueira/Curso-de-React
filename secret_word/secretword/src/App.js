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

  const [changeWord, setChangeWord] = useState('')
  const [changeCategory, setChangeCategory] = useState('')
  const [letters, setLetters] = useState([])

  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(3)
  const [score, setScore] = useState(0)

  const changeWordAndCategory = () =>{
    //escolha aleátoria da categoria
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]
   // console.log(category)

   //escolha aleátoria da palavra chave
   const word = words[category][Math.floor(Math.random() *words[category].length)]
   //console.log(word)

   return {word, category}
  }
 
   // funções que alteram o stage do jogo
  const start = () =>{

    // escolha de categoria e palavra chave
   const  {category, word} = changeWordAndCategory()
   //console.log(category, word)

   // criando array de letras 
   let wordLetters = word.split('')
   wordLetters = wordLetters.map((l) => l.toLowerCase());
   //console.log(wordLetters)

   //  executa o set alterando o state
   setChangeWord(word)
   setChangeCategory(category)
   setLetters(wordLetters)
   setGameStage(stages[1].name)
  }
  const clearStates = ()=>{
    setGuessedLetters([])
    setWrongLetters([])
  } 
  useEffect(()=>{
    // reset de todas as letras zerando os estados
    clearStates()
    if(guesses <= 0){
      setGameStage(stages[2].name)
    }
  }, [guesses])
  const retryAgain = () =>{
    setScore(0);
    setGuesses(3);
    setGameStage(stages[0].name);
  }

  // função que verifica as letras digitadas pelo úsuario
  const verifyLetter = (letter) =>{
    
    const normalizedLetter = letter.toLowerCase()

    // verifica se a letra já foi utilizada 
    if (guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter))
    {
      return
    }

    // verifica tentativas do usuário
    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        letter,
      ])
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter,
      ])

      setGuesses((actualGuesses) => actualGuesses - 1);
    }
  }
  //console.log(guessedLetters)
  //console.log(wrongLetters)
  //console.log(words)
  return (
    <div className="App">
      {gameStage === 'start' &&  <StartScreen  start={start}/>}
      {gameStage === 'game' &&  <Game verifyLetter={verifyLetter}
      changeWord={changeWord} 
      changeCategory={changeCategory} 
      letters={letters} 
      guessedLetters={guessedLetters} 
      wrongLetters={wrongLetters} 
      guesses={guesses} 
      score={score} />}
      {gameStage === 'end' &&  <GameOver retryAgain={retryAgain}/>}
      
    </div>
  );
}

export default App;
