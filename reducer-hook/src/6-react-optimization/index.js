import React, {useState} from 'react'
import { useFetch } from '../4-custom-hook/2-useFetch'
const url = 'https://reactcourseapi.gorakhjoshi.com/';

const Index = () => {
    const { products } = useFetch(url)
    const [count, setCount] = useState(0)
    console.log('Index compoent is running')
    // console.log(products)
    return (
        <>
        <h1>{count}</h1>
        <button className = 'btn' onClick = {() => setCount(count + 1)}>counter </button>
            <BigList products={products} />
        </>
    )
}
    const BigList = React.memo(({ products}) => {
        // console.log(products)
        console.log('BigList is running')

        return (
        <>
            {products.map((product) => {
                // console.log(product.id)
                return <SingleProducts key={product.id} {...product} ></SingleProducts>

            })}

        </>

    )
})
const SingleProducts = ({fields})=>{
    console.log('product is running')
    const {name, price} = fields
    // console.log(fields.name)
    return <article className='product'> 
    <img src = {fields.image[0].url} alt = '' />
    <h4>{name}</h4>
    <p>{price}</p>
    </article>
}

export default Index
