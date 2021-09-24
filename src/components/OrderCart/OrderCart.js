import React from 'react';
import './OrderCart.css';

const OrderCart = (props) => {
    console.log(props.cart)
    const {cart} = props;
    let total = 0;
    cart.forEach(product => {
        total += product.price;
    });
    return (
        <div className="order-cart">
            <div className="order-title">
                <h3 className="order-summary">Order Summary</h3>
                <p className="items-order">Items Ordered: {props.cart.length}</p>
            </div>
            <div className='price-calc'>
                <div>
                    <small>Items:</small>
                    <small>Shipping & Handling:	</small>
                    <small>Total before tax:</small>
                    <small>Estimated Tax:</small>
                    <p className="total">Order Total:</p>
                </div>
                <div>
                    <small>${total}</small>
                    <small>$43.91</small>
                    <small>$3558.4</small>
                    <small>$355.84</small>
                    <p className="total">$3914.24</p>
                </div>
            </div>
            <div className="order-btns">
                <button className="order-btn">Review Your Order</button>
            </div>
        </div>
    );
};

export default OrderCart;