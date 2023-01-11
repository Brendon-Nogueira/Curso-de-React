import "./GameOver.css";

const GameOver = ({ retryAgain, score }) => {
  return (
    <div className="gameover">
      <h1>Fim de jogo!</h1>
      <h2>
        A sua pontuação foi: <span>{score}</span>!
      </h2>
      <button onClick={retryAgain}>Reiniciar</button>
    </div>
  );
};

export default GameOver;