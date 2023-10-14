import React from 'react';
import {Text, View, Pressable, StyleSheet} from 'react-native';
import { ChatsItemProps, ChatsItemScreenNavigationProps } from '../core/types';
import { useNavigation} from '@react-navigation/native';

export default function ChatsItem(props: ChatsItemProps): React.JSX.Element{
    const navigation = useNavigation<ChatsItemScreenNavigationProps>();

    function onPress(): void{
        navigation.navigate("ChatsRoom", {
            slug: props.slug,
            title: props.el.title
        })
    }

    function onDeleteChat(): void{
        if (props.login.login === props.el.creator.login){
            props.deleteChat({
                slug: props.slug
            })

            let raw = "";

            let requestOptions: Object = {
                    method: 'DELETE',
                    body: raw,
                    redirect: 'follow'
            };

            fetch(`https://3e09667b-bc51-4799-a070-54b252e92e94.mock.pstmn.io/chats/?slug=${props.slug}`, requestOptions)
                .then(response => response.text())
                .then(result => console.log(result))
                .catch(error => console.log('error', error));
        }
    }

    let lastMsg = (props.el?.messages.length > 0 && props.el?.messages != undefined) ? props.el?.messages[props.el?.messages.length - 1].content : "Здесь пока пусто(";

    return(
        <Pressable onPress={onPress} style={styles.container}>
            <View>
                <Text style={styles.text}>{props.el.title}</Text>
                <Text>{lastMsg}</Text>
            </View>
            {props.login.login === props.el.creator.login ? <Pressable onPress={onDeleteChat}><Text>X</Text></Pressable> : null}
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 10,
        marginBottom: 10,
    },
    text: {
        fontSize: 16,
        color: 'black'
    },
    button: {
        borderRadius: 15
    },
})