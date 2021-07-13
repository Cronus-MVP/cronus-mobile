import { createStore, combineReducers, compose } from 'redux';
import loginReducer from './reducers/login_reducer';

const rootReducer = combineReducers({
    login: loginReducer,
});

let composeEnhancers = compose;

if(__DEV__){
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configStore = () => {
    return createStore(rootReducer);
};

export default configStore;