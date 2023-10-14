/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import reducer from '../core/reducers';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Chats from './Chats';
import LoginForm from '../core/containers/LoginForm';
import ChatsRoom from './ChatsRoom';
import {HomeStackNavigatorParamList} from '../core/types';

const store = configureStore({reducer});

const Stack = createNativeStackNavigator<HomeStackNavigatorParamList>();

function App(): React.JSX.Element {
	
  return (
	<Provider store={store}>
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Login">
				<Stack.Screen 
					name="Login" 
					component={LoginForm} 
					options={{
						title: 'Вход',
					}}
				/>
				<Stack.Screen 
					name="Chats" 
					component={Chats}
					options={{
						title: 'Чаты',
					}}
				/>
				<Stack.Screen 
					name="ChatsRoom" 
					component={ChatsRoom}
					options={{
						title: 'Чат',
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	</Provider>
  );
}

export default App;
