import { authAPI, axiosInstance } from '../dal/axios-instance';
import { ActionType, DispatchType } from './reduxStore';
type UserType = {
    userId: null | number
    userName: null | string
    avatarUrl: string
}
export type InitialStateAuthType = {
    isAuth: boolean
    //userInfo: UserType
}
let initialState = {
    isAuth: false,
    // userInfo: {
    //     userId: null,
    //     userName: null,
    //     avatarUrl: ""
    // }
}
export type setAuthUserDataType = {
    type: "SET-AUTH",
    isAuth: boolean
}

export const authReducer = (state: InitialStateAuthType = initialState, action: ActionType) => {
    switch (action.type) {
        case 'SET-AUTH': {
            return {
                ...state,
                isAuth: action.isAuth
            }
        }
        default: return state
    }
}

export const setAuthUserAC = (isAuth: boolean): setAuthUserDataType => ({
    type: "SET-AUTH",
    isAuth: isAuth
})


