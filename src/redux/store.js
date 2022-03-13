import { applyMiddleware, createStore} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import {reducer} from './reducer'



let store = createStore(reducer , composeWithDevTools(applyMiddleware(thunk)))

export default store
console.log(store.getState())