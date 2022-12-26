const EventComponent = ()=>{
    // handle event
    const handleMyEvent = (e) =>{
        
        console.log('disparou o event onClick')
    }
    //função de renderização
    const renderSomething = (x)=>{

        if(x){

            return <h1>Renderizando isso!</h1>
        }else {
            return <h1>Renderizando também</h1>
        }
    }


    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Click</button>
            </div>

            <div>
                <div>
                    <button onClick={()=> console.log('disparou o segundo button')}>Click 2</button>
                    <button onClick={()=>{
                        if(true){
                            console.log('Má prática')}
                    }}>Click 3</button>
                </div>
            </div>

            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )
}

export default EventComponent