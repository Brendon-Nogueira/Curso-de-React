import './StartScreen.css'
const StartScreen = ({start}) => {
  return (
    <div className="start">
        <img src="./Secretwordsvg.png" alt="secretword" />
        <button onClick={start}>Play</button>
    </div>
  )
}

export default StartScreen