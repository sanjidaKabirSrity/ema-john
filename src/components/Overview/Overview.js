import React from 'react';
import useProducts from '../../hooks/useProducts';
import useCart from '../../hooks/useCart';
import OrderCart from '../OrderCart/OrderCart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import { useHistory } from 'react-router';

const Overview = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);

    const handleRemoveToCart = key =>{
        const newCart = cart.filter(findCart=>findCart.key!==key)
        setCart(newCart)
        removeFromDb(key)
    }

    let history = useHistory();
        function handlePlaceOrderClick() {
            history.push("/placeOrder");
            setCart([]);
            clearTheCart(products)
        }
    return (
        <div>
            <div className = 'shop' >
                <div className = 'products' > 
                 {
                     cart.map(products=> <ReviewItem key={products.key} products={products} handleRemoveToCart={handleRemoveToCart}/>)
                 }
                </div> 
                <div className = 'order-summary' >
                    <OrderCart cart = {cart}>
                    <div className="order-btns">
                        <button className="order-btn" onClick={handlePlaceOrderClick}>Place Order</button>
                    </div>
                    </OrderCart>
                </div > 
            </div>
        </div>
    );
};

export default Overview;