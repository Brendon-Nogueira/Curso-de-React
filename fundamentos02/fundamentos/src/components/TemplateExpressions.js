const TemplateExpressions = () =>{

    const name = 'Brendon'
    const data = {
        age: 23,
        job : 'estudante',



    }
    return (
        <div>
            <p> Seja Bem Vindo {name} ao React!</p>
            <p> Você é {data.job} de Sistemas de Informação</p>
        </div>
    )
}

export default TemplateExpressions