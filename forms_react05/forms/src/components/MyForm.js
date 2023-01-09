import './MyForm.css'
import { useState } from "react";

const MyForm = ({user}) => {
    // 5- controlled inputs
    // 3 - gerenciando dados

    const [name, setName] = useState(user ? user.name : '')
    const [email, setEmail] = useState(user ? user.email : '')
    const [bio, setBio] = useState(user ? user.bio : '')
    const [role, setRole] = useState(user ? user.role : '')

    const handleName = (e) =>{
        setName(e.target.value)
    }

   // console.log(name)
   // console.log(email)
   // console.log(bio)
   // console.log(role)

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log('Enviando os dados do formulário')
        console.log(name, email, bio, role)

    //6- reset form
    setName('')
    setEmail('')
    setBio('')
   
    }
  return (
    <div>
        {/*1 - criando o primeiro  formulário*/}
         {/* 4 - envio de form*/}
        <form  onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" placeholder="Digite seu nome" onChange={handleName} value={name} />
            </div>

             {/*2 - label envolvendo input*/}
             <div>
                <label>
                    <span>E-mail</span>
                {/*3 - simplificação de manipulação de state*/}
                    <input type="email" name="email" placeholder="example@gmail.com" 
                    onChange={(e)=> setEmail(e.target.value)} value={email} />
                </label>
             </div>
              {/*7 - text area*/}
            <div>
                <label>
                <span>Bio:</span>
                <textarea name="bio" placeholder='descrição pessoal'
                onChange={(e)=> setBio(e.target.value)} value={bio} ></textarea>
                </label>
            </div>
             {/*8 - SELECT*/}
             <label>
          <span>Função</span>
          <select name="role" onChange={(e) =>setRole(e.target.value)}>
            <option value="user">Usuário</option>
            <option value="editor">Editor</option>
            <option value="admin">Admin</option>
          </select>
        </label>
            <input type="submit" value="Enviar" />

            
        </form>
    </div>
  )
}

export default MyForm