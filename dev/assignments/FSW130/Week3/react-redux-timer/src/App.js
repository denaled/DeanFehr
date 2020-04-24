import React from 'react';
import {Provider} from 'react-redux'
import Timer from './timer'
import store from  './store'

function App() {
  return (
    <Provider store={store}>
      <Timer/>

    </Provider>
  );
}

export default App;
