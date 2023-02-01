
import './App.css';
import {useState, useEffect} from 'react'

const URL_BASE = `http://localhost:3000/products`

function App() {

  const [products, setProducts] = useState([])
  // resgatando os dados do arquivo db.json

  const [name, setName] = useState('') 
  const [price, setPrice] = useState('')

  useEffect(()=>{
    async function fetchData(){
      const res = await fetch(URL_BASE)
      const data = await res.json()

      setProducts(data)
    }

    fetchData()
  },[])

 // adicionando produtos, na aplicação 
 const handleSubmit = async (e)=>{
  e.preventDefault()

  const product = {
    name,
    price
  }

 // console.log(product)
 const res = await fetch(URL_BASE,{
  method: "POST",
  headers:{
    "Content-Type": "application/json"
  },
  body: JSON.stringify(product)
 })

 // carregamento dinâmico
 const add = await res.json() 
  setProducts((prevProducts) => [...prevProducts,add])
 }


  return (
    <div className="App">
     <h1>Lista de Produtos</h1>
     <ul>
      {products.map((products) => (
        <li key={products.id}>{products.name} - R$: {products.price}</li>
      ))}
     </ul>

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
