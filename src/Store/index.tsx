import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ICartState } from './Modules/Cart/Types';
import RootReducer from './Modules/RootReducer';

export interface IState {
  cart: ICartState;
}
const store = createStore(
  RootReducer,
  composeWithDevTools(),
);

export default store;
