import React, {useState, useEffect} from 'react';
import {Text, View, TextInput, Button, StyleSheet} from 'react-native';
import { LoginFormProps, LoginScreenNavigationProps } from '../core/types';
import { useNavigation} from '@react-navigation/native';

export default function LoginForm({userLogin, setInitial}: LoginFormProps): React.JSX.Element{
    const [login, setLogin] = useState<string>("");
    const navigation = useNavigation<LoginScreenNavigationProps>();

    useEffect(() => {
		let raw = "";

		let requestOptions: Object = {
				method: 'GET',
				body: raw,
				redirect: 'follow'
		};

		fetch("https://3e09667b-bc51-4799-a070-54b252e92e94.mock.pstmn.io/chats", requestOptions)
				.then(response => response.json())
				.then(result => setInitial?.(result))
				.catch(error => console.log('error', error));
	}, [])

    function loginHandler(): void{
        if (login !== ""){
            userLogin?.({
                login
            })
            navigation.navigate('Chats', {
                login,
                chats: undefined
            });
            setLogin("");
        }

    }

    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Введите ваш логин</Text>
                <TextInput placeholder='Логин' onChangeText={setLogin} value={login} style={styles.input}/>
            </View>
            <Button title="Войти" onPress={loginHandler}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%', 
        minHeight: '100%', 
        marginLeft: 'auto', 
        marginRight: 'auto', 
        borderRadius: 15, 
        paddingHorizontal: 20, 
        paddingVertical: 20
    },
    input: {
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 10,
        marginBottom: 10,
        fontSize: 14
    },
    title: {
        fontSize: 20,
        marginBottom: 10
    },
    button: {
        borderRadius: 15
    },
})