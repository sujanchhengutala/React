import React from 'react'
// import PropTypes from 'prop-types'
import dd from '../images/dd.jpg'

const Product = ({ image, name, price }) => {
    const url = image && image.url 
    // console.log(url)
    return (
    <article className= 'product'>
        <h4>{name}</h4>
        <p>{price} </p>
        <img src={url || dd } alt=' name ' />
    </article>)
}
// Product.propTypes = {
//     image: PropTypes.object.isRequired,
//     name: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
// }
// Product.defaultProps = {
//     name: 'sujan chhengutala',
//     price: 15,
//     image: dd
// }
export default Product


