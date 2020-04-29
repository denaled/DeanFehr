import React from 'react';
import {Provider} from 'react-redux'
import './App.css';
import Card from './Card'
import store from './store'

function App() {
  return (
    <div>
      <Provider store={store}>
     <Card />
     </Provider>
    </div>
  );
}

export default App;
