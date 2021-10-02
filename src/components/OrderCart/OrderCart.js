import React from 'react';
import './OrderCart.css';

const OrderCart = (props) => {
    const {cart} = props;

    // const total = cart.reduce((pre, curr) => pre + curr.price ,0)
    const total = cart.reduce((pre, curr) => pre + curr.price * curr.quantity ,0)
    const shipping = cart.reduce((pre, curr) => pre + curr.shipping ,0)
    const quantity = cart.reduce((pre, curr) => pre + curr.quantity ,0)

    // let total = 0;
    // let shipping = 0;
    // cart.forEach(product => {
    //     total += product.price;
    //     shipping += product.shipping;
        
    // });
    const taxBeforeTotal = total + shipping;
    const tax = taxBeforeTotal/10;
    const grandTotal = taxBeforeTotal + tax;

    return (
        <div className="order-cart">
            <div className="order-title">
                <h3 className="order-summary">Order Summary</h3>
                <p className="items-order">Items Ordered: {quantity}</p>
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
                    <small>${total.toFixed(2)}</small>
                    <small>${shipping.toFixed(2)}</small>
                    <small>${taxBeforeTotal.toFixed(2)}</small>
                    <small>${tax.toFixed(2)}</small>
                    <p className="total">${grandTotal.toFixed(2)}</p>
                </div>
            </div>
            {props.children}
        </div>
    );
};

export default OrderCart;