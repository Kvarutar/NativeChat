import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RouteProp } from '@react-navigation/native';

export type ChatStateContent = {
    title: string,
    slug: string,
    creator: Login,
    dateOfCreation: string,
    messages: Array<Messages>
}

export type ChatsItemProps = {
    el: ChatStateContent,
    login: Login,
    slug: string,
    deleteChat: Function
};

export type LoginFormProps = {
    userLogin?: Function,
    setInitial?: Function
};

export type ChatFormProps = {
    createChat?: Function,
    login: string,
    isModal: boolean,
    setModal: Function
};

export type Messages = {
    content: string,
    dateOfCreation: string,
    creator: Login
};

export type ChatsType = {
    chats: ChatStateContent[]
};

export type MessageStateProps = {
    chats: ChatStateContent[],
    login: string
}

export type Login = {
    login: string,
};

export type ChatsProps = {
    chats: ChatStateContent[] | undefined,
    login: Login | {},
    createChat?: Function
};

export type ChatsRoomProps = {
    slug: string,
    title: string,
}

export type MessagesProps = {
    chats: ChatStateContent[],
    slug: string,
    createMessage: Function,
    login: Login
}

export type HomeStackNavigatorParamList = {
    Login: LoginFormProps,
    Chats: ChatsProps,
    ChatsRoom: ChatsRoomProps
};

export type LoginScreenNavigationProps = NativeStackNavigationProp<
    HomeStackNavigatorParamList, 
    'Login'
>;

export type ChatsItemRouteProp = RouteProp<
    HomeStackNavigatorParamList,
    'ChatsRoom'
>;

export type ChatsItemScreenNavigationProps = NativeStackNavigationProp<
    HomeStackNavigatorParamList, 
    'ChatsRoom'
>;