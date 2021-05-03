import React from 'react';
import { ActionType } from './reduxStore';

export type InitialStateAuthType = {
    isAuth:boolean
}
let initialState = {

}


export const authReducer = (state:any=initialState, action:ActionType) => {
    switch(action.type){
        case 'LOGIN': {
            return {
                ...state,
            }
        }
        default: return state
    }

}