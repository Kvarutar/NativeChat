import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { Messages } from '../core/types';

export default function LoginForm({creator, dateOfCreation, content}: Messages): React.JSX.Element{

    return(
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.creator}><Text style={styles.creator}>{creator.login}</Text></View>
                <View><Text>{dateOfCreation}</Text></View>
            </View>
            <Text style={styles.text}>{content}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '70%',
        backgroundColor: '#b6e1fc',
        borderRadius: 20,
        padding: 10,
        marginBottom: 10,
    },
    wrapper: {
        flexDirection: 'row',
    },
    creator: {
        marginRight: 5,
        color: '#4f4f4f'
    },
    text: {
        fontSize: 16,
        color: 'black'
    },
    button: {
        borderRadius: 15
    },
})