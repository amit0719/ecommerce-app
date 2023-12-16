import React from 'react';

const Cart = () => {
  // Fetch cart items or use dummy data
  const cartItems = [
    { id: 1, name: 'Product 1', price: '$10', quantity: 2 },
    { id: 2, name: 'Product 2', price: '$20', quantity: 1 },
    // ...more cart items
  ];

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
      {/* Checkout button, total price calculation, etc. */}
    </div>
  );
};

export default Cart;
