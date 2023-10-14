import React, {useState} from 'react';
import {Text, Modal, View, TextInput, Button, Pressable, StyleSheet} from 'react-native';
import { ChatFormProps } from '../core/types';
import slugify from 'react-slugify';

export default function ChatForm({login, createChat, isModal, setModal}: ChatFormProps): React.JSX.Element{
    const [title, setTitle] = useState<string>("");

    function createChatHandler(): void{
        let slug = slugify(translit(title))
        let newChat = {
            title,
            slug,
            creator: login,
            dateOfCreation: new Intl.DateTimeFormat().format(new Date()),
            messages: [],
        }

        createChat?.(newChat);
        const raw = JSON.stringify(newChat);

        const requestOptions: Object = {
                method: 'POST',
                body: raw,
                redirect: 'follow'
        };

        fetch("https://3e09667b-bc51-4799-a070-54b252e92e94.mock.pstmn.io/chats", requestOptions)
                .then(response => response.text())
                .then(result => console.log(result))
                .catch(error => console.log('error', error));

        setTitle("");
        setModal(false)
    }

    function translit(str: string): string{
        let ru=("А-а-Б-б-В-в-Ґ-ґ-Г-г-Д-д-Е-е-Ё-ё-Є-є-Ж-ж-З-з-И-и-І-і-Ї-ї-Й-й-К-к-Л-л-М-м-Н-н-О-о-П-п-Р-р-С-с-Т-т-У-у-Ф-ф-Х-х-Ц-ц-Ч-ч-Ш-ш-Щ-щ-Ъ-ъ-Ы-ы-Ь-ь-Э-э-Ю-ю-Я-я").split("-")   
        let en=("A-a-B-b-V-v-G-g-G-g-D-d-E-e-E-e-E-e-ZH-zh-Z-z-I-i-I-i-I-i-J-j-K-k-L-l-M-m-N-n-O-o-P-p-R-r-S-s-T-t-U-u-F-f-H-h-TS-ts-CH-ch-SH-sh-SCH-sch-'-'-Y-y-'-'-E-e-YU-yu-YA-ya").split("-")   
        let res = '';
        for(let i=0, l=str.length; i<l; i++) { 

            let s = str.charAt(i), n = ru.indexOf(s); 

            if(n >= 0) { 
                res += en[n]; 
            } else { 
                res += s; 
            } 
        } 
        return res;  
    }

    return(
        <Modal
            animationType='fade'
            transparent={false}
            visible={isModal}
            onRequestClose={() => setModal(false)}
        >
            <View style={styles.container}>
                <View style={styles.top}>
                    <Text style={styles.title}>Создание чата</Text>
                    <Pressable
                        onPress={() => setModal(!isModal)}>
                        <Text>X</Text>
                    </Pressable>
                </View>
                <TextInput 
                    placeholder='Название чата' 
                    value={title} 
                    onChangeText={setTitle} 
                    style={styles.input}
                />
                
                <Button
                    onPress={createChatHandler}
                    title="Добавить чат"
                />
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%', 
        minHeight: '100%', 
        marginLeft: 'auto', 
        marginRight: 'auto', 
        borderRadius: 15, 
        paddingHorizontal: 20, 
        paddingVertical: 20,
        backgroundColor: '#e6e6e6'
    },
    top: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        marginBottom: 20
    },
    input: {
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 10,
        marginBottom: 15,
        fontSize: 14
    },
    title: {
        fontSize: 20,
        marginBottom: 10
    },
})