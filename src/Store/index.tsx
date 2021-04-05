import { createStore } from 'redux';
import { ICartState } from './Modules/Cart/Types';
import RootReducer from './Modules/RootReducer';

export interface IState {
  cart: ICartState;
}
const store = createStore(RootReducer);

export default store;
