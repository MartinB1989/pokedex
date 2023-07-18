import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Favorite from '../screens/Favorite'

const Stack = createNativeStackNavigator()

const NavFavorite = () => {
  return (
    <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
      <Stack.Screen name='Favorite' component={Favorite} />
    </Stack.Navigator>
  )
}

export default NavFavorite