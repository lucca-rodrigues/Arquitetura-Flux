import { Reducer } from "redux";
import produce from 'immer';
import { ICartState } from "./Types";

const INITIAL_STATE: ICartState = {
  items: []
};

const Cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch(action.type){
      case 'ADD_PRODUCT_TO_CART' : {
        console.log(action.payload);
        const { product } = action.payload;

          draft.items.push({
            product,
            quantity: 1,
          });

          break;
      }
      default: {
        return state;
      }
    }
  });
}

export default Cart;
