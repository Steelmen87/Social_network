import {profileAPI, usersAPI} from "../api/api";
import {AppStateType} from "./redux-store";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO = 'SAVE_PHOTO';

export type AddPostActionType = {
    type: 'ADD-POST',
    newPostText: string
}
export type UpDateNewPostActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}
export type AddMessageActionType = {
    type: 'ADD-MESSAGE'
    newMessageText: string
}
export type UpDateMessageActionType = {
    type: 'UPDATE-MESSAGE-TEXT'
    newTextMessage: string
}
export type ActionsTypes =
    savePhotoSuccessType
    | AddPostActionType
    | UpDateNewPostActionType
    | AddMessageActionType
    | UpDateMessageActionType
export type TYPESALLACTION = ActionsTypes | SetUserProfileActionType | setStatusType
export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type PhotosType = {
    small: string | null
    large: string | null
}
export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}
let initialState = {
    posts: [
        {id: 1, message: "Hi how are you?", likesCount: 5},
        {id: 2, message: "It is my First post!", likesCount: 23},
        {id: 3, message: "BlaBla", likesCount: 65},
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: '',

};
export type InitialStateType = typeof initialState;

const profileReducer = (state: InitialStateType = initialState, action: TYPESALLACTION): InitialStateType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        case SAVE_PHOTO: {
            return {...state, profile: {...state.profile, photos: action.photos} as ProfileType}
        }
        default :
            return state
    }
}

export const addPostActionCreator = (newPostText: string): AddPostActionType => ({type: ADD_POST, newPostText})

type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}
export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({type: SET_USER_PROFILE, profile})
export type setStatusType = {
    type: typeof SET_STATUS
    status: string
}
export const savePhotoSuccess = (photos: PhotosType): savePhotoSuccessType => ({type: SAVE_PHOTO, photos} as const)
export type savePhotoSuccessType = {
    type: typeof SAVE_PHOTO
    photos: PhotosType
}
export const setStatus = (status: string): setStatusType =>
    ({type: SET_STATUS, status: status})

export const getUsersProFile = (userId: number) => async (dispatch) => {
    const response = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(response));
}
export const getStatus = (userId: number) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response));
}
export const updateStatus = (status: string) => async (dispatch) => {
    try {
        let response = await profileAPI.updateStatus(status);
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    } catch (error) {
        //
    }
}
export const savePhoto = (file) => async (dispatch: any) => {
    let response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}

export const saveProfile = (profile) => async (dispatch,getState) => {
    const userId = getState().auth.id;
    const response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
        dispatch(getUsersProFile(userId));
    }
}

export default profileReducer;