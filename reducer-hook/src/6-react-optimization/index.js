import React, {useCallback, useState} from 'react'
import { useFetch } from '../4-custom-hook/2-useFetch'
const url = 'https://reactcourseapi.gorakhjoshi.com/';

const Index = () => {
    const { products } = useFetch(url)
    const [count, setCount] = useState(0)
   const[cart, setCart] = useState(0)
    console.log('Index compoent is running')
    // console.log(products)
    const addToCart =useCallback(()=>{
        setCart(cart + 1)
    },[cart])
    return (
        <>
        <h1>{count}</h1>
        <button className = 'btn' onClick = {() => setCount(count + 1)}>counter </button>
        <h2 style = {{marginTop : '3rem'}}>Cart: {cart}</h2>
            <BigList products={products} addToCart = {addToCart} />
        </>
    )
}
    const BigList = React.memo(({ products, addToCart}) => {
        // console.log(products)
        console.log('BigList is running')

        return (
        <>
            {products.map((product) => {
                // console.log(product.id)
                return <SingleProducts key={product.id} {...product} addToCart = {addToCart} ></SingleProducts>

            })}

        </>

    )
})
const SingleProducts = ({fields, addToCart})=>{
    console.log('product is running')
    const {name, price} = fields
    // console.log(fields.name)
    return <article className='product'> 
    <img src = {fields.image[0].url} alt = '' />
    <h4>{name}</h4>
    <p>{price}</p>
    <button onClick = {addToCart}>Add to cart</button>
    </article>
}

export default Index
