import React, {useEffect, useState} from 'react';
import OrderCart from '../OrderCart/OrderCart';
import Products from '../Products/Products';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('./products.JSON').then(res => res.json()).then(data => setProducts(data))
    } , [])
    const handleAddToCart = product => {
        const newCart = [...cart , product]
        setCart(newCart)
    }
    return (
        <div className='shop'>
            <div className='products'>
                {
                    products.map(product => <Products key={product.key} product={product}
                    hhandleAddToCart={handleAddToCart}/>)
                }
            </div>
            <div className='order-summary'>
                <OrderCart cart={cart}/>
            </div>
        </div>
    );
};

export default Shop;