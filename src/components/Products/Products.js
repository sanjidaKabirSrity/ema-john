import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Products.css';

const Products = (props) => {
    const {name, category, img, price, stock, star} = props.product;
    return (
        <div className="product">
            <div className= 'img'>
                <img src={img} alt="" />
            </div>
            <div>
                <p className="name">{name}</p>
                <small>by : {category}</small>
                <p className="price">${price}</p>
                <small>only {stock} left in stock - order soon</small><br/>
                <button className = "btn" onClick={() => props.hhandleAddToCart(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>
            </div>
        </div>
    );
};

export default Products;