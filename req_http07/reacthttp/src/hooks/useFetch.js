import {useState, useEffect} from 'react'

// criando meu próprio hook 

export const useFetch = (url) => {
    const [data, setData] = useState(null)

    // refatorando o post obs: (utilizando o mesmo hook, porém é válido em alguns casos)
    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState(false)

    // loading  - carregamento
    const [loading, setLoading] = useState(false)

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
       }
    }
    
    useEffect(()=>{
    const fetchData = async () =>{
        //loading - carregando
        setLoading(true)
        const res = await fetch(url)
        const json = await res.json()

        setData(json)
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
            }
        }
        httpRequest()
    }, [config, method, url])

    return {data, httpConfig, loading}
}