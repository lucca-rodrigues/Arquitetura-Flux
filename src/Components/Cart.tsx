import React from 'react';
import { useSelector } from 'react-redux';
import { IState } from '../Store';
import { ICartItem } from '../Store/Modules/Cart/Types';

const Cart: React.FC = () => {
  const cart = useSelector<IState, ICartItem[]>(state => state.cart.items)

  console.log(cart);

  return(
    <table>
      <thead>
        <tr>
          <th>Produto</th>
          <th>Preço</th>
          <th>Quantidade</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>
        {cart.map(item => (
          <tr key={item.product.id}>
            <tr>{item.product.price}</tr>
            <tr>{item.quantity}</tr>
            <tr>{(item.product.price * item.quantity).toFixed(2)}</tr>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Cart;
