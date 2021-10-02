import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
    const {name, price, category, quantity} = props.products;
    return (
        <div className="product">
            <div>
                <p className="name">{name}</p>
                <div>
                    <div>
                    <small className="pr">${price}</small>
                    <small>Sold by: {category}</small>
                    <p>Quantit: {quantity}</p>
                    <button className = "btn" onClick={()=>props.handleRemoveToCart(props.products.key)}>Remove</button>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;