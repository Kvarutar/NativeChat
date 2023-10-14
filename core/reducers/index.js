import {combineReducers} from 'redux';
import chatsReducer from './chats';
import loginReducer from './login';

const rootReducer = combineReducers({
    chats: chatsReducer,
    login: loginReducer
})

export default rootReducer;