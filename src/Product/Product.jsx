import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

 

 
const Product  = (props) => {
    const {img, name, ratings, price, seller} = props.product;
    const handleAddToCard = props.handleAddToCard;
    return (
        <div className='product'>
           <img src={img} alt="" />
           {/* <div className='product-info'> */}
           <h3 className='product-name'>{name}</h3>
           <h4>Price:${price}</h4>
           <p>Manufacture:{seller}</p>
           <p>Rating:{ratings} Stars</p>
           {/* </div> */}
         <button className='btn-cart' onClick={()=>handleAddToCard(props.product)}>
            Add to Cart
         <FontAwesomeIcon icon={faShoppingCart} />
            </button> 
        </div>
    );
};

export default Product;