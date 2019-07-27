import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import {PersonState} from './reducer';
import {Store} from 'redux';



const store: Store<PersonState> = createStore(reducer, applyMiddleware(thunk));
export default store;