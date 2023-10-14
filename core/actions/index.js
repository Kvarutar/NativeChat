import * as actionTypes from "../constants/actionTypes";

export const createChat = (payload) => ({type: actionTypes.CREATE_CHAT, payload});
export const deleteChat = (payload) => ({type: actionTypes.DELETE_CHAT, payload});
export const login = (payload) => ({type: actionTypes.LOGIN, payload});
export const logout = () => ({type: actionTypes.LOGOUT});
export const createMessage = (payload) => ({type: actionTypes.CREATE_MESSAGE, payload})
export const setInitial = (payload) => ({type: actionTypes.SET_INITIAL, payload})