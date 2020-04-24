import React from 'react';
import {Provider} from 'react-redux'
/* import logo from './logo.svg'; */
import './App.css';

import Timer from './Timer'
import store from './store'

function App() {
  return (
    <div>
      <Provider store={store}>
     <Timer />
     </Provider>
    </div>
  );
}

export default App;