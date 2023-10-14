import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, FlatList, ListRenderItem} from 'react-native';
import { MessagesProps, Messages as MessagesType } from '../core/types';
import Message from './Message';
import MessageForm from './MessageForm';

export default function Messages({chats, slug, createMessage, login}: MessagesProps): React.JSX.Element{
    const [messages, setMessages] = useState(chats?.[chats?.findIndex(el => el.slug === slug)].messages);
    let ws = new WebSocket('wss://ws.postman-echo.com/raw');

    useEffect(() => {
        ws.onopen = () => {
            console.log('connected');
        };
        
        return(() => {
            ws.onclose = (e) => {
                console.log(e.code, e.reason);
                console.log('disconnected');
            };
        })
    },[])

    ws.onmessage = (e) => {
        if (JSON.parse(e.data).message.login !== login.login){
            let indexOfChat = chats.findIndex(el => el.slug === slug);
            let chat = chats[indexOfChat];
            let chatMessages = [...chat.messages];

            chatMessages.unshift(JSON.parse(e.data).message);
            let newChat = {
                ...chat,
                messages: chatMessages
            }

            let raw: string = JSON.stringify(newChat);

            let requestOptions: Object = {
                    method: 'PUT',
                    body: raw,
                    redirect: 'follow'
            };

            fetch(`https://3e09667b-bc51-4799-a070-54b252e92e94.mock.pstmn.io/chats/?slug=${slug}`, requestOptions)
                .then(response => response.text())
                .then(result => console.log(result))
                .catch(error => console.log('error', error));
            }
    };

    function onCreateMessage(content: string, creator = login){
        let newMessage = {
            content,
            dateOfCreation: new Intl.DateTimeFormat('ru').format(new Date()),
            creator
        }

        let newStateMessages = messages?.length === 0 ? [newMessage] : [newMessage, ...messages];
        setMessages(newStateMessages);

        ws.send(JSON.stringify({
            message: newMessage
        }));

        createMessage({
            slug,
            message: newMessage
        });
    }

    const renderMessage: ListRenderItem<MessagesType> = ({item, index}) => {
        return <Message content={item.content} dateOfCreation={item.dateOfCreation} creator={item.creator} key={index}/>
    }

    return(
        <View>
            <View style={styles.container}>
                {messages && (
                    <FlatList 
                        ListEmptyComponent={<Text>Будьте первым, кто напишет здесь</Text>}
                        inverted={true}
                        data={messages}
                        renderItem={renderMessage}
                        keyboardDismissMode='on-drag'
                        snapToStart={false}
                        style={{maxHeight: '100%'}}
                    />
                )}
            </View>
            <MessageForm onCreateMessage={onCreateMessage}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        maxHeight: '80%',
        backgroundColor: 'white',
        borderRadius: 20,
        paddingVertical: 30,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
})