import {getAuthUserData} from "./auth-reduser";

const SET_INITIALIZED_SUCCESS = 'SET_INITIALIZED_SUCCESS';


let initialState = {
    initialized: false
}

export type InitialStateType = typeof initialState

const appReducer = (state = initialState, action: initializedType): InitialStateType => {
    switch (action.type) {
        case SET_INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }
        default :
            return state;
    }
}
export type initializedType = ReturnType<typeof InitializedSuccess>

export const InitializedSuccess = () => ({
    type: SET_INITIALIZED_SUCCESS
} as const)

export const InitializeApp = () => async (dispatch: any) => {
    let promise = await dispatch(getAuthUserData())
    dispatch(InitializedSuccess())
}

export default appReducer;