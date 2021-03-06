import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import thunk from 'redux-thunk';
import { authReducer, InitialStateAuthType, setAuthUserDataType } from './authReducer';
import { InitialStateLoginType, loginReducer, SetStatusType, SetMessageType } from './loginReducer';

export type ActionType = | setAuthUserDataType | SetStatusType | SetMessageType
export type DispatchType = (action: ActionType) => void

export type StateType = {
    auth: InitialStateAuthType
    login: InitialStateLoginType
}


export let store: Store = createStore(combineReducers({
    auth: authReducer,
    login: loginReducer
}),
    applyMiddleware(thunk))