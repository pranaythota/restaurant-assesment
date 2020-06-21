import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import RestuarentReducer from '../reducers/RestaurentReducer';

export const store = createStore(RestuarentReducer,applyMiddleware(thunkMiddleware))