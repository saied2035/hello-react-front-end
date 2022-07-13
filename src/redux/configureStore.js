import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import greetingReducer from './Greeting/Greeting';

const rootReducer = combineReducers({ greetingReducer });
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
