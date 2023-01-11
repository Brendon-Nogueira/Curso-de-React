import './StartScreen.css'
const StartScreen = ({start}) => {
  return (
    <div className="start">
        <h1>Secret Word</h1>
        <button onClick={start}>Play</button>
    </div>
  )
}

export default StartScreen