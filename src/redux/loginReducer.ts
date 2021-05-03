import { axiosInstance } from '../dal/axios-instance';
import { ActionType, DispatchType } from './reduxStore';

export type InitialStateLoginType = {
    status: "INIT" | "ERROR" | "INPROGRESS" | "CAPTCHAREQUIRED"
    message: string
    captchaUrl: string
}
export type LoginAuthType = {
    type: "LOGIN",
    status: "INIT" | "ERROR" | "INPROGRESS" | "CAPTCHAREQUIRED",
}



let initialState: InitialStateLoginType = {
    status: "INIT",
    message: "",
    captchaUrl: "",
}

export const loginReducer = (state: any = initialState, action: ActionType) => {
    switch (action.type) {
        case 'LOGIN': {
            return {
                ...state,
            }
        }
        default: return state
    }

}

export const SetStatusAC = () => {

}

export const loginThunk = (email: string, pass: string, rm: boolean) => (dispatch: DispatchType) => {
    axiosInstance.post('auth/login', {
        email: email,
        password: pass,
        rememberMe: rm,
    }).then((res) => { debugger })
}