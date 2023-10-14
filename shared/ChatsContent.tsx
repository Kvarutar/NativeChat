import React, {useState} from 'react';
import {View, Button, TextInput, StyleSheet, ScrollView} from 'react-native';
import ChatsItem from '../core/containers/ChatsItem';
import ChatForm from '../core/containers/ChatForm';
import { ChatsType } from '../core/types';

export default function ChatsContent({chats}: ChatsType): React.JSX.Element {
    const [isModal, setModal] = useState<boolean>(false);
    const [search, setSearch] = useState<string>("");

    const content = search.trim() === "" ? 
                                chats?.map((el) => <ChatsItem el={el} key={el.slug} slug={el.slug}/>) 
                                : chats?.filter(el => el.slug.indexOf(search) !== -1).map((el) => <ChatsItem el={el} key={el.slug} slug={el.slug}/>);

    return(
        <View style={{width: '100%'}}>
            <View style={styles.container}>
                <TextInput value={search} onChangeText={setSearch} placeholder='Искать по названию чата...' style={styles.input}/>
                <Button
                    onPress={() => setModal(true)}
                    title="Создать чат"
                />
            </View>
            <View style={{maxHeight: '80%'}}>
                <ChatForm isModal={isModal} setModal={setModal}/>
                <ScrollView style={{maxHeight: '100%'}}>
                    {content}
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%', 
        paddingBottom: 25
    },
    input: {
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 10,
        marginBottom: 10,
        fontSize: 14
    },
})
