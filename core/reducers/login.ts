import {
    LOGIN,
    LOGOUT
} from "../constants/actionTypes";

interface State {
    login: string
}

type LogAction = | {type: typeof LOGIN, payload: State} | {type: typeof LOGOUT}

const initialState = {
    login: "Guest"
}

export default function chatsReducer(state: State = initialState, action: LogAction){
    switch(action.type){
        case LOGIN:
            return {
                login: action.payload.login
            };
        case LOGOUT:
            return {
                login: "Guest"
            };
        default:
            return state;
    }
}

