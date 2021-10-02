import { useEffect } from "react";
import { useState } from "react";
import {getStoredCart} from '../utilities/fakedb';

const useCart = products => {
    const [cart , setCart] = useState([])
    useEffect(()=>{
        if (products.length){
            const saveCart = getStoredCart();
            const storedCard = [];
            for (const key in saveCart){
                const addedProduct = products.find(product => product.key === key);
                if(addedProduct){
                    const quantity = saveCart[key];
                    addedProduct.quantity = quantity;
                    storedCard.push(addedProduct);
                }
                setCart(storedCard);
            }
        }
    },[products])
    return [cart, setCart]
}

export default useCart;