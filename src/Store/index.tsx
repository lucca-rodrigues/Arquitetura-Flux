import { createStore } from 'redux';
import RootReducer from './Modules/RootReducer';

const store = createStore(RootReducer);

export default store;