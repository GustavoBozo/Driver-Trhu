import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/pages/Login';
import Register from './src/pages/Register';
import Home from './src/pages/Home';
import GPS from './src/pages/GPS';
import Loja from './src/pages/Loja';

export default function App() {
  const Stack = createStackNavigator();
  return (
  <NavigationContainer>
  <Stack.Navigator 
screenOptions={{headerShown: false}}
initialRouteName="Login"
>
    <Stack.Screen component={Login} name='Login'/>
    <Stack.Screen component={Register} name='Register'/>
    <Stack.Screen component={Home} name='Home'/>
    <Stack.Screen component={Loja} name='Loja' />
    <Stack.Screen component={GPS} name='GPS'/>
  </Stack.Navigator>
  </NavigationContainer>
  );
}


