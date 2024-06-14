import React, { useEffect, useState } from 'react';
import { getCart, addItemToCart, removeItemFromCart } from '../services/api';

const Cart = ({ cartId }) => {
  const [cart, setCart] = useState(null);

  useEffect(() => {
    getCart(cartId).then((response) => {
      setCart(response.data);
    });
  }, [cartId]);

  const handleRemoveItem = (itemId) => {
    removeItemFromCart(cartId, itemId).then(() => {
      setCart((prevCart) => ({
        ...prevCart,
        items: prevCart.items.filter((item) => item.id !== itemId),
      }));
    });
  };

  if (!cart) return <div>Loading...</div>;

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cart.items.map((item) => (
          <li key={item.id}>
            {item.product.title} - ${item.product.price}
            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total Price: ${cart.total_price}</p>
    </div>
  );
};

export default Cart;
