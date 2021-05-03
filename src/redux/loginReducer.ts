import axios from 'axios';
import { Dispatch } from 'react';
import { ActionType } from './reduxStore';

type InitialStateType = {

}
export type LoginAuthType = {
    type: "LOGIN",
    status: "INIT" | "ERROR" | "INPROGRESS" | "CAPTCHAREQUIRED",
}



let initialState:InitialStateType = {
    status: "INIT"
}

export const loginReducer = (state:any=initialState, action:ActionType) => {
    switch(action.type){
        case 'LOGIN': {
            return {
                ...state,
            }
        }
        default: return state
    }

}

export const SetStatusAC = ()=>{

}

export const LoginThunk=(login:string, pass:string, rm:boolean, c:any) => (dispatch:any)=>{
axios.post('')
}