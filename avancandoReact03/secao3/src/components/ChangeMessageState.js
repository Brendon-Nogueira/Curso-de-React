const ChangeMessageState = ({handleMessage}) => {
    const  messages = [
        'Olá meu nome é Brendon',
        'Olá meu nome é Brendon, eu tenho 23 anos',
        'Olá meu nome é Brendon, sou estudante de Sistemas de Informação e tenho 23 anos'
    ]
  return (
    <div>

        <button onClick={()=> handleMessage(messages[0])}>1</button>
        <button onClick={()=> handleMessage(messages[1])}>2</button>
        <button onClick={()=> handleMessage(messages[2])}>3</button>

    </div>
  )
}

export default ChangeMessageState