const Challenge = ()=>{

    const handleClick = (e)=>{
       
        let a = 5
        let b = 9

        let sum = a + b

        console.log(sum)
    }
    return (
        <div>
            <p>Faça a soma!</p>
            <button onClick={handleClick}>sum</button>
        </div>
    )
}

export default Challenge