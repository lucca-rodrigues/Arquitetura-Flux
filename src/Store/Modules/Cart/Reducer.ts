import { Reducer } from "redux";
import { ICartState } from "./Types";

const INITIAL_STATE: ICartState = {
  items: []
};

const Cart: Reducer<ICartState> = () => {
  return INITIAL_STATE;
}

export default Cart;
