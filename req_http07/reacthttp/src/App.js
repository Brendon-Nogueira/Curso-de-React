
import './App.css';
import {useState, useEffect} from 'react'

//custom hooks
import { useFetch } from './hooks/useFetch';



const url = `http://localhost:3000/products`

function App() {

  const [products, setProducts] = useState([])
  // resgatando os dados do arquivo db.json

  const [name, setName] = useState('') 
  const [price, setPrice] = useState('')

  // utlizando o custom hook
  const {data : items, httpConfig, loading} = useFetch(url)
  
 /* useEffect(()=>{
    async function fetchData(){
      const res = await fetch(url)
      const data = await res.json()

      setProducts(data)
    }

    fetchData()
  },[]) */

 // adicionando produtos, na aplicação 
 const handleSubmit = async (e)=>{
  e.preventDefault()

  const product = {
    name,
    price
  }

 // console.log(product)
 /*const res = await fetch(url,{
  method: "POST",
  headers:{
    "Content-Type": "application/json"
  },
  body: JSON.stringify(product)
 })

 // carregamento dinâmico
 const add = await res.json() 
  setProducts((prevProducts) => [...prevProducts,add])*/

  // 5- refatorando hook
  httpConfig(product, 'POST')

  setName('')
  setPrice('')
 }


  return (
    <div className="App">
     <h1>Lista de Produtos</h1>
     {/* loading dos dados*/}
     {loading && <p>Carregando o produto cadastrado no sistema...</p> }
     {!loading && (
         <ul>
         {items && items.map((products) => (
           <li key={products.id}>{products.name} - R$: {products.price}</li>
         ))}
        </ul>
      )}

     <div className="add-products">
      <h2>Cadastro de Produtos</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} name="name" onChange={(e)=>{ setName(e.target.value)}} />
        </label>
        <label>
          Price:
          <input type="number" value={price} name="price" onChange={(e)=>{ setPrice(e.target.value)}} />
        </label>
        <input type="submit" value="save"/>
      </form>

     </div>
    </div>
  );
}

export default App;
