import {createStore, combineReducers} from 'redux'
import filterReducer from "./reducers/filter/filterReducer";
import pizzasReducer from "./reducers/pizza/pizzasReducer";
const rootReducer = combineReducers({

  filterReducer:filterReducer,
   pizzasReducer: pizzasReducer
})

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())



window.__store__ = store;

export default store