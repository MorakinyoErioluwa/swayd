import {createContext, useEffect, useState} from "react";

export const CartContext = createContext();

export function CartProvider({children}) {

    const [cart, setCart] = useState( () => {
        const savedCart = localStorage.getItem("swayd-cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem("swayd-cart", JSON.stringify(cart));
    }, [cart]);

    function addToCart(product, quantity) {
    setCart((currentCart) => {
        const existingItem = currentCart.find(
            (item) => item.id === product.id
        );

        if (existingItem) {
            return currentCart.map((item) =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + quantity }
                    : item
            );
        }

        return [...currentCart, { ...product, quantity }];
    });
}
    function updateQuantity(productId, quantity) {
    setCart((currentCart) =>
        currentCart.map((item) =>
            item.id === productId
                ? { ...item, quantity: quantity }
                : item
        )
    );
}

function removeFromCart(productId) {
    setCart((currentCart) =>
        currentCart.filter((item) => item.id !== productId)
    );
}

function clearCart() {
  setCart([]);
}
    

    return (
        <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeFromCart, clearCart }}>
            {children}

        </CartContext.Provider>
    )
}