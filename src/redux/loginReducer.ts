import { ActionType } from './reduxStore';
import React from 'react';


let initialState = {

}

export const loginReducer = (state:any=initialState, action:ActionType) => {
    switch(action.type){
        case 'LOGIN': {

        }
        default: return state
    }

}