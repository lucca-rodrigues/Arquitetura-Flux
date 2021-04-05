import { Reducer } from "redux";
import { ICartState } from "./Types";

const INITIAL_STATE: ICartState = {
  items: []
};

const Cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
  // Action e State é um parâmetro do Redux que utilizamos como props
  // para executar algumas ações
  switch(action.type){
    case 'ADD_PRODUCT_TO_CART' : {
      console.log(action.payload); // Payload = dado enviado pro reducer

      const { product } = action.payload;

      return {
        ...state,
        items: [
          ...state.items,
          {
           product,
           quantity: 1,
          }
        ]
      };
    }
    default: {
      return state;
    }
  }
}

export default Cart;
