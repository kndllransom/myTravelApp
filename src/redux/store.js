import { createStore } from "redux";
import thunk from 'redux-thunk'
import { applyMiddleware, compose } from 'redux'
import addTrip from './reducer'
import {combineReducers} from 'redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  trip: addTrip
})

const middleware = composeEnhancers(applyMiddleware(
  thunk
))


const store = createStore(
  rootReducer, middleware
  );

export default store;
