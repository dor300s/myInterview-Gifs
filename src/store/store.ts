import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { gifReducer } from './reducers/gifReducer';
import { GifActionTypes } from './types/actionTypes';

export const rootReducer = combineReducers({
    gifApp: gifReducer
})

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

export type AppState = ReturnType<typeof rootReducer>

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk as ThunkMiddleware<AppState, GifActionTypes>)));