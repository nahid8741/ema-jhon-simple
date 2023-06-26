import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';

const Shop = () => {
     const [products, setProducts] = useState([]);
     const [cart, setCart] = useState([]);

     useEffect(() => {
         fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res => res.json())
        .then (data => setProducts(data));
     },[])

     const handleAddToCard = (product) =>{
        const newCart = [...cart, product]
        setCart(newCart)
     }   
    
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product 
                    key={product.id}
                    product = {product}
                    handleAddToCard = {handleAddToCard}
                    ></Product>)
                }
            </div>
            <div className="card-container">
                <h4>order summary</h4>
                <p>Select Item: {cart.length}</p>
            </div>
            
        </div>
    );
};

export default Shop;