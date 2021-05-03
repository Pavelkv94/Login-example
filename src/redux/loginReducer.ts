import { axiosInstance } from '../dal/axios-instance';
import { ActionType, DispatchType } from './reduxStore';
type StatusType = "INIT" | "ERROR" | "INPROGRESS" | "CAPTCHAREQUIRED" | "SUCCESS"
export type InitialStateLoginType = {
    status: StatusType
    message: string
    captchaUrl: string
}
export type SetStatusType = {
    type: "SET-STATUS",
    status: StatusType
}
export type SetMessageType = {
    type: "SET-MESSAGE",
    message: string
}

let initialState: InitialStateLoginType = {
    status: "INIT",
    message: "",
    captchaUrl: "",
}

export const loginReducer = (state: any = initialState, action: ActionType) => {
    switch (action.type) {
        case 'SET-STATUS': {
            return {
                ...state,
                status: action.status
            }
        }
        case 'SET-MESSAGE': {
            return {
                ...state,
                message: action.message
            }
        }
        default: return state
    }

}

export const SetStatusAC = (status: StatusType): SetStatusType => ({
    type: "SET-STATUS",
    status: status
})
export const SetMessageAC = (message: string): SetMessageType => ({
    type: "SET-MESSAGE",
    message: message
})

export const loginThunk = (email: string, pass: string, rm: boolean) => (dispatch: DispatchType) => {
    dispatch(SetStatusAC("INPROGRESS"))
    axiosInstance.post('auth/login', {
        email: email,
        password: pass,
        rememberMe: rm,
    }).then((res) => {
        //debugger 
        if (res.data.resultCode === 0) {
            dispatch(SetStatusAC("SUCCESS")); alert('Вы залогинились!')
        } else {
            dispatch(SetStatusAC("ERROR"));
            dispatch(SetMessageAC(res.data.messages[0]));
            alert(res.data.messages[0])
        }
    })
}