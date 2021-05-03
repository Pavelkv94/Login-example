import { authAPI, axiosInstance } from '../dal/axios-instance';
import { ActionType, DispatchType } from './reduxStore';

export type InitialStateAuthType = {
    isAuth: boolean
}
let initialState = {
    isAuth: true
}
export type setAuthUserDataType = {
    type: "SET-USER-DATA",
    data: any
}

export const authReducer = (state: InitialStateAuthType = initialState, action: ActionType) => {
    switch (action.type) {
        case 'SET-USER-DATA': {
            return {
                ...state,
                ...action.data,
                isAuth:false
            }
        }
        default: return state
    }
}

// export const setAuthUserData = (id: null | number, login: null | string, email: null | string): setAuthUserDataType => ({
//     type: "SET-USER-DATA",
//     data: { id, login, email }
// })
// export const getAuthUserDataThunkCreator = () => (dispatch: DispatchType) => {
//     authAPI.me().then(response => {
//         if (response.data.resultCode === 0) {
//             let { id, login, email } = response.data.data;
//             dispatch(setAuthUserData(id, login, email));
//         }
//     });
// }