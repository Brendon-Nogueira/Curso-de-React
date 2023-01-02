const UserDetails = ({name, age, profession}) => {

  return (
          <div>
            
            <h1>Desafio 4</h1>
            <p>Nome: {name}</p>
            <p>Idade: {age}</p>
            <p>Profissão: {profession}</p>
            {age >= 18 ? (
              <div>
                <p>Idade permite dirigir!</p>
              </div>
            ):(
              <div>
                <p>Idade não permite dirigir!</p>
              </div>
            )}
          </div>
        )
      }

export default UserDetails