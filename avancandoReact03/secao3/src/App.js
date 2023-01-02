//components
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragments from './components/Fragments';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';

//img
import Miranha from './assets/miranha.jpg'

//style
import './App.css';
import { useState } from 'react';

function App() {

   // utilização de várivavel  const name = 'Brendon'
    const [userName] = useState('Eduardo')

    const cars = [
      {id: 1, brand: 'Ferrari', km: 0, color: 'red', newCar: true},
      {id: 2, brand: 'Porche', km: 0, color: 'purple', newCar: true},
      {id: 3, brand: 'Porche', km: 0, color: 'Black', newCar: true}   
    ]

    const users = [
      {id:1, name: 'Brendon', age: 23 , profession: 'Dev web'},
      {id:2, name: 'Fabricio',age: 25, profession: 'Dev web'},
      {id:3, name: 'Eduardo', age: 19, profession: 'Dev security'},
      {id: 4,name: 'Luana', age: 17, profession: 'Estudante' }
    ]


    const [message, setMessage] = useState('')

    const handleMessage = (msg) =>{
      setMessage(msg)
    }

    function showMessage(){
      console.log('Event do component pai')
    }

  return (
    <div className="App">
      <h1>Avançando no React!</h1>
       {/*IMG na pasta public*/}
      <div>
      <img src="/miranha1.jpg" alt="imagem do homem aranha" />
      </div>

     {/*IMG na pasta assets*/}
      <div>
      <img src={Miranha} alt="imagem do homem aranha"/>
      </div>

       {/*Utilizando hooks*/}
        <ManageData/>
        <ListRender/>
        <ConditionalRender/>

        {/*Utilizando props*/}
        <ShowUserName  name={userName}/>
        {/*Destructuring props*/}
         <CarDetails brand="Ford" km={38000} color="white"/>

        {/*Reaproveitando*/}
        <CarDetails brand="VW" km={0} color="red" newCar={true}/>
        <CarDetails brand="Fiat" km={0} color="green" newCar={true}/>
        <CarDetails brand="Chevrolet" km={10000} color="yellow" newCar={false}/>
         {/*Looping em array de objetos*/}
         {cars.map((car)=>(
        <CarDetails brand={car.brand} km={car.km} color={car.color} newCar={car.newCar}/>
         ))}

        {/*React Fragments*/}
        <Fragments  propFragment="teste"/>

         {/*Children*/}
        <Container myValue="123">
          <p>Conteúdo</p>
        </Container>

        {/*Executar função*/}
        <ExecuteFunction myFunction={showMessage}/>

        {/*State lift*/}
        <Message msg={message}/>
        <ChangeMessageState  handleMessage={handleMessage}/>
        
         {/*Desafio 4*/}
         {users.map((user)=>(
          <UserDetails name={user.name} age={user.age} profession={user.profession}/>
         ))}
         
        


        <div>
      </div>
    </div>

    
  );
}

export default App;
