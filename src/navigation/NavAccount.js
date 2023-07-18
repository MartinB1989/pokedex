import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Account from '../screens/Account';

const Stack = createNativeStackNavigator()

const NavAccount = () => {
  return (
    <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
      <Stack.Screen name='Account' component={Account} />
    </Stack.Navigator>
  )
}

export default NavAccount