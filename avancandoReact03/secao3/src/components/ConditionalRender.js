import {useState} from 'react'

const ConditionalRender = () => {

    const [y] = useState(true)

    const [name, setName]= useState('Matheus')
 
 
    return (
    <div> 
        <h1>Isso será exibido?</h1>

        {y && <p>Se a condição for verdadeira sim</p>}

        <h1>If ternario</h1>
        {name === 'Brendon' ? (
          <div>
            <p>Meu nome é João</p>
          </div>
        ) : (
          <div>
            <p>Nome não encontrado</p>
          </div>
           )}
    <button onClick={()=> setName('Brendon')}>Click Aqui! </button>
    </div>
  )
}

export default ConditionalRender