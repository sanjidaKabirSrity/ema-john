import React, {useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import {addToDb, getStoredCart} from '../../utilities/fakedb';
import OrderCart from '../OrderCart/OrderCart';
import Products from '../Products/Products';
import './Shop.css';
import { useHistory } from 'react-router';

const Shop = () => {
        const [products, setProducts] = useState([]);
        const [cart, setCart] = useState([])
        const [searchProducts, serSearchProducts] =useState([]);

        useEffect(() => {
            fetch('./products.json').then(res => res.json()).then(data => {
                setProducts(data);
                serSearchProducts(data);
            })
        }, [])

        useEffect(() => {
            if (products.length) {
                const saveCart = getStoredCart();
                const storedCard = [];
                for (const key in saveCart) {
                    const addedProduct = products.find(product => product.key === key);
                    if(addedProduct){
                        const quantity = saveCart[key];
                        addedProduct.quantity = quantity;
                        storedCard.push(addedProduct);
                    }
                }
                setCart(storedCard);
            }
        }, [products])

        const handleAddToCart = product => {
            const exists = cart.find(pd => pd.key === product.key);
            let newCart = [];
            if(exists){
                const rest = cart.filter(pd => pd.key !== product.key);
                exists.quantity += 1;
                newCart = [...rest, product];
            }else{
                product.quantity = 1;
                newCart = [...cart, product];
            }
            setCart(newCart)
            // save to local storage (for now)
            addToDb(product.key)
        }

        const handleSearch = event => {
            const searchText = event.target.value;
            const matchProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
            serSearchProducts(matchProducts);
        }

        let history = useHistory();
        function handleClick() {
            history.push("/order");
        }
        return ( 
        <div>
            <div className="search-box">
                <input onChange={handleSearch} type="text" placeholder="type here to search" />
                <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
                <h2 className="cart-quantity">{cart.length}</h2>
            </div>
            <div className = 'shop' >
                <div className = 'products' > 
                {
                 searchProducts.map(product => < Products key ={product.key} product = {product} hhandleAddToCart = {handleAddToCart}/>)
                } 
                </div> 
                <div className = 'order-summary' >
                    <OrderCart cart = {cart}>
                    <div className="order-btns">
                        <button className="order-btn" onClick={handleClick}>Review Your Order</button>
                    </div>
                    </OrderCart>
                </div > 
            </div>
        </div>
            );
        };

        export default Shop;