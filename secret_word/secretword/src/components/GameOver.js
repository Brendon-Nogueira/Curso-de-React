import './GameOver.css'

const GameOver = ({retryAgain}) => {
  return (
    <div>
      <h1>Game Over</h1>
      <button onClick={retryAgain}>Tentar novamente</button>
    </div>
  )
}

export default GameOver