import {
    CREATE_CHAT,
    CREATE_MESSAGE,
    DELETE_CHAT,
    SET_INITIAL
} from "../constants/actionTypes";

import { Login } from "../types";

interface Messages{
    content: string,
    dateOfCreation: string,
    creator: Login
}

interface NewMessages{
    slug: string,
    message: Messages
}

interface StateContent {
    title: string,
    slug: string,
    creator: Login,
    dateOfCreation: string,
    messages: Array<Messages>
}

type State = StateContent[]

interface DeletePayload {
    slug: string
}

type ChatAction = | {type: typeof CREATE_CHAT, payload: StateContent} 
                    | {type:typeof DELETE_CHAT, payload: DeletePayload} 
                    | {type:typeof CREATE_MESSAGE, payload: NewMessages}
                    | {type:typeof SET_INITIAL, payload: State}

const initialState = [
        {
            title: "First chat",
            slug: "first-chat",
            creator: {login: "admin"},
            dateOfCreation: new Intl.DateTimeFormat('ru').format(new Date(2023, 9, 11)),
            messages: [{
                content: "Первое в мире сообщение",
                creator: {login: "admin"},
                dateOfCreation: new Intl.DateTimeFormat('ru').format(new Date(2023, 9, 11))
            }],
        },
        {
            title: "Minecraft",
            slug: "minecraft",
            creator: {login: "admin"},
            dateOfCreation: new Intl.DateTimeFormat('ru').format(new Date(2011, 9, 10)),
            messages: [{
                content: "I really LOVE minecraft, U?",
                creator: {login: "admin"},
                dateOfCreation: new Intl.DateTimeFormat('ru').format(new Date(2023, 9, 11))
            }],
        },
        {
            title: "Dead chat",
            slug: "dead-chat",
            creator: {login: "admin"},
            dateOfCreation: new Intl.DateTimeFormat('ru').format(new Date(2011, 9, 9)),
            messages: [],
        },
    ]

export default function chatsReducer(state: State = initialState, action: ChatAction){
    switch(action.type){
        case SET_INITIAL:
            return [...action.payload]
        case CREATE_CHAT:
            if (state.filter(el => action.payload.slug === el.slug).length > 0){
                return [
                    ...state
                ]
            }else {
                return [
                    action.payload, ...state
                ];
            }
        case DELETE_CHAT:
            return [
                ...state.filter((item) => item.slug !== action.payload.slug)
            ];
        case CREATE_MESSAGE:
            let indexOfChat = state.findIndex(el => el.slug === action.payload.slug);
            let chat = state[indexOfChat];
            let chatMessages = [...chat.messages];

            chatMessages.unshift(action.payload.message);
            let newChat = {
                ...chat,
                messages: chatMessages
            }

            return [...state.slice(0, indexOfChat), newChat, ...state.slice(indexOfChat + 1, state.length)];
        default:
            return state;
    }
}

