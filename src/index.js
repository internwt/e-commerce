
import React from 'react';
import './index.css'
import ReactDOM from 'react-dom';
import App from './App';
import cartReducer from './Components/Reducer/cartReducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


const store = createStore(cartReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));