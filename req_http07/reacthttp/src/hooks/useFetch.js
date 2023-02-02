import {useState, useEffect} from 'react'

// criando meu próprio hook 

export const useFetch = (url) => {
    const [data, setData] = useState(null)

    // refatorando o post obs: (utilizando o mesmo hook, porém é válido em alguns casos)
    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState(false)
    const [itemId, setItemId] = useState(null);

    // loading  - carregamento
    const [loading, setLoading] = useState(false)

    //tratando erros
    const [error, setError] = useState(null)

    const httpConfig = (data, method)=>{
       if(method === 'POST'){
        setConfig({
            method,
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(data)
        })

        setMethod(method)
       } else if (method === "DELETE") {
        setConfig({
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });
  
        setMethod("DELETE");
        setItemId(data);
      }
    }
   
    useEffect(()=>{
    const fetchData = async () =>{
        //loading - carregando
        setLoading(true)
       try {
        const res = await fetch(url)
        const json = await res.json()

        setData(json)
       } catch (error) {
        console.log(error.message)
        setError('Houve algum erro no carregamento do produto em nosso sistema')
       }
        setLoading(false)
    }
    fetchData()
    }, [url, callFetch])

    // post refatorado
    useEffect(()=>{
        const httpRequest = async ()=>{

            if(method === 'POST'){
                let fetchOp = [url, config]
                const res = await fetch(...fetchOp)
                const json = await res.json()
                setCallFetch(json)
            }  else if (method === 'DELETE') {

        const deleteUrl = `${url}/${itemId}`;

        const res = await fetch(deleteUrl, config);

        const json = await res.json();

        setCallFetch(json);
      } else if (method === 'DELETE') {
        const deleteUrl = `${url}/${itemId}`;

        const res = await fetch(deleteUrl, config);

        const json = await res.json();

        setCallFetch(json);
      }
        }
        httpRequest()
    }, [config, method, url, itemId])

    return {data, httpConfig, loading, error}
}