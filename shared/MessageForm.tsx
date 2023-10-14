import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

interface MessgaFormProps {
    onCreateMessage: (content: string) => void
}

export default function MessageForm({onCreateMessage}: MessgaFormProps): React.JSX.Element{
    const [content, setContent] = useState<string>("");

    function onSend(){
        if (content.trim() !== ""){
            onCreateMessage(content);
            setContent("");
        }
    }

    return(
        <View>
            <TextInput style={styles.input} placeholder='Начните писать здесь...' value={content} onChangeText={setContent}/>
            <Button title="Отправить" onPress={onSend}/>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 10,
        marginBottom: 10,
        fontSize: 14,
        marginTop: 20
    },
})