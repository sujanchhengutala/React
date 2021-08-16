import  { useState, useEffect } from "react"

export const useFetch = (url)=>{
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])
    useEffect(()=>{
        const getProduct = async()=>{
            const response = await fetch(url)
            const product = await response.json()
            // console.log(product)
            setProducts(product)
            setLoading(false)
        }
        getProduct()
    },[url])
    return {loading, products }
}