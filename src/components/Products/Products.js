import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Products.css';
import Rating from 'react-rating';

const Products = (props) => {
    const {name, category, img, price, stock, star , features} = props.product;

    
    return (
        <div className="product">
            <div className= 'img'>
                <img src={img} alt="" />
            </div>
            <div>
                <p className="name">{name}</p>
                <small>by : {category}</small>
                <div className="product-customize">
                    <div>
                        <p className="price">${price}</p>
                        <small>only {stock} left in stock - order soon</small><br/>
                        <button className = "btn" onClick={() => props.hhandleAddToCart(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>
                    </div>
                    <div className="rating-body">
                        <Rating className="star" initialRating={star} emptySymbol="far fa-star" fullSymbol="fas fa-star" readonly/>
                        <h4>Features</h4>
                        <ul className="features-list">
                            {
                              features.map(feature => <small><li key={feature.value}>{feature.description}: {feature.value}</li></small>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;