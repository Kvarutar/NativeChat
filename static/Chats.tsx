import React from 'react';
import {View} from 'react-native';
import ChatsContent from '../core/containers/ChatsContent';

export default function Chats(): React.JSX.Element {

    return(
        <View style={{width: '100%', minHeight: '100%', marginLeft: 'auto', marginRight: 'auto', borderRadius: 15, paddingHorizontal: 20, paddingVertical: 20}}>
            <ChatsContent/>
        </View>
    )
}

