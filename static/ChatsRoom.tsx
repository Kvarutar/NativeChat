import React, {useEffect} from 'react';
import {View} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Messages from '../core/containers/Messages';
import { ChatsItemRouteProp } from '../core/types';

export default function ChatsRoom(): React.JSX.Element {
    const route = useRoute<ChatsItemRouteProp>();
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({ title: route.params.title })
    })

    return(
        <View style={{width: '100%', minHeight: '100%', marginLeft: 'auto', marginRight: 'auto', borderRadius: 15, paddingHorizontal: 20, paddingVertical: 20}}>
            <Messages slug={route.params.slug}/>
        </View>
    )
}
