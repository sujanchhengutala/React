import React, {useFetch} from './2-useFetch'

const url = 'https://reactcourseapi.gorakhjoshi.com/';

const Example = () => {
   const { loading, products } = useFetch(url)
   console.log(products)

    return (
        <div>
            <h2> {loading ? 'loading' : 'products' } </h2>
        </div>
    )
}

export default Example
