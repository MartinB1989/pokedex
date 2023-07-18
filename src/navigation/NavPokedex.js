import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Pokedex from '../screens/Pokedex';

const Stack = createNativeStackNavigator()

export default function NavPokedex() {
  return (
    <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
      <Stack.Screen name='Pokedex' component={Pokedex} />
    </Stack.Navigator>
  )
}