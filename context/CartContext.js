import React, { useState } from "react";
import {toast} from "react-hot-toast";

// import { toast } from 'react-hot-toast';
const CartContext = React.createContext({
        showCart : false,
        setShowCart:(value)=>{},
        setItems:(items)=>{},
        setTotalPrice:(a)=>{},
        setTotalQuantities:(a)=>{},
        cartItems:[],
        totalPrices:0,
        totalQuantity:0,
        quantity:1,
        addItem:(item,qty)=>{},
        removeItem:(id)=>{},
        emptyCart:()=>{},
        incQty:()=>{},
        decQty:()=>{},
        toggleCartItemQuanitity:(id,value)=>{},
        onRemove:(product)=>{}
});
export default CartContext;

export  const CartContextProvider = (props)=>{
    
    const [showCartState , setShowCartState]=useState(false);
    const [items, setItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantities, setTotalQuantities] = useState(0);
    const [qty, setQty] = useState(1);
 

    const onAdd = (product, quantity) => {
        const checkProductInCart = items.find((item) => item._id === product._id);
        
        setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);
        
        if(checkProductInCart) {
          const updatedCartItems = items.map((cartProduct) => {
            if(cartProduct._id === product._id) return {
              ...cartProduct,
              quantity: cartProduct.quantity + quantity
            }
          })
    
          setItems(updatedCartItems);
        } else {
          product.quantity = quantity;
          
          setItems([...items, { ...product }]);
        }
    
        toast.success(`${quantity} ${product.name} added to the cart.`);
      } 
    
    const RemoveItemHAndler=(id)=>{
        
    }
    const EmptyCartHandler=()=>{
        
    }
    const incQtyy = () => {
        setQty((prevQty) => prevQty + 1);
      }
    
      const decQtyy = () => {
        setQty((prevQty) => {
          if(prevQty - 1 < 1) return 1;
         
          return prevQty - 1;
        });
      }
      let foundProduct;
      let index;
      const toggleCartItemQuanitity = (id, value) => {
        foundProduct = items.find((item) => item._id === id)
        index = items.findIndex((product) => product._id === id);
        const newCartItems = items.filter((item) => item._id !== id)
    
        if(value === 'inc') {
            setItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity + 1 } ]);
          setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price)
          setTotalQuantities(prevTotalQuantities => prevTotalQuantities + 1)
        } else if(value === 'dec') {
          if (foundProduct.quantity > 1) {
            setItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity - 1 } ]);
            setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price)
            setTotalQuantities(prevTotalQuantities => prevTotalQuantities - 1)
          }
        }
      }

      const onRemovee = (product) => {
        foundProduct = items.find((item) => item._id === product._id);
        const newCartItems = items.filter((item) => item._id !== product._id);
    
        setTotalPrice((prevTotalPrice) => prevTotalPrice -foundProduct.price * foundProduct.quantity);
        setTotalQuantities(prevTotalQuantities => prevTotalQuantities - foundProduct.quantity);
        setItems(newCartItems);
        toast.success(`${product.name} deleted from the cart.`);
      }
    const contextt={
        showCart:showCartState,
        setShowCart:setShowCartState,
        cartItems:items,
        totalPrices:totalPrice,
        totalQuantity:totalQuantities,
        quantity:qty,
        addItem:onAdd,
        removeItem:RemoveItemHAndler,
        emptyCart:EmptyCartHandler,
        incQty:incQtyy,
        decQty:decQtyy,
        toggleCartItemQuanitity:toggleCartItemQuanitity,
        onRemove:onRemovee,
        setItems:setItems,
        setTotalPrice:setTotalPrice,
        setTotalQuantities:setTotalQuantities
    }; 

    return <CartContext.Provider value={contextt}>
        {props.children}
    </CartContext.Provider>

}
