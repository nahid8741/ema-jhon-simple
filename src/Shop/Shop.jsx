import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Components/Header/Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {
     const [products, setProducts] = useState([]);
     const [cart, setCart] = useState([]);

     useEffect(() => {
         fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res => res.json())
        .then (data => setProducts(data));
     },[])

     useEffect (()=> {
        const storedCart = getShoppingCart();
        const savedCart = [];
        // step-1: get id
        for(const id in storedCart){
            // step-2: get the product by using id
            const addedProduct = products.find(product => product.id === id)
            //step-3: get quantity of the product
            if(addedProduct){
                const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            // step-4: add the added product of the save cart
            savedCart.push(addedProduct)
            //  console.log(addedProduct);
        }

        }
        setCart(savedCart)
     },[products])

     const handleAddToCard = (product) =>{
        const newCart = [...cart, product]
        setCart(newCart)
        addToDb(product.id)
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
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;