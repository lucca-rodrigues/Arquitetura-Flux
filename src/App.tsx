import React from 'react';
import { Provider } from 'react-redux';
import store from './Store/index';
import Catalog from './Components/Catalog';

const App = () => {
  return(
    <Provider store={store}>
      <Catalog/>
    </Provider>
  )
}

export default App;