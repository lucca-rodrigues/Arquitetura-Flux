import React from 'react';
import { Provider } from 'react-redux';
import store from './Store/index';
import Cart from './Components/Cart';
import Catalog from './Components/Catalog';

const App = () => {
  return(
    <Provider store={store}>
      <Catalog/>
      <Cart />
    </Provider>
  )
}

export default App;
