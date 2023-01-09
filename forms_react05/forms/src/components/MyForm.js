import './MyForm.css'
import { useState } from "react";

const MyForm = () => {
    // 3 - gerenciando dados

    const [name, setName] = useState()
    const [email, setEmail] = useState()

    const handleName = (e) =>{
        setName(e.target.value)
    }

    console.log(name)
    console.log(email)
  return (
    <div>
        {/*1 - criando o primeiro  formulário*/}

        <form>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" placeholder="Digite seu nome" onChange={handleName} />
            </div>

             {/*2 - label envolvendo input*/}
             <div>
                <label>
                    <span>E-mail</span>
                {/*3 - simplificação de manipulação de state*/}
                    <input type="email" name="email" placeholder="example@gmail.com" 
                    onChange={(e)=> setEmail(e.target.value)} />
                </label>
             </div>
            <input type="submit" value="Enviar" />

            
        </form>
    </div>
  )
}

export default MyForm