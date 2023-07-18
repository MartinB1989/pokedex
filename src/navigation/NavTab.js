import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome5'
import NavFavorite from './NavFavorite'
import NavPokedex from './NavPokedex'
import NavAccount from './NavAccount'

const Tab = createBottomTabNavigator()

const NavTab = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name='NavAccount' component={NavAccount}
        options={{
          tabBarLabel: 'Mi cuenta',
          tabBarIcon: ({ color, size }) => <Icon name='user' color={color} size={size} />
        }}
      />
      <Tab.Screen name='NavPokedex' component={NavPokedex}
        options={{
          tabBarLabel: 'Pokedex',
          tabBarIcon: () => renderPokeballImage()
        }}
      />
      <Tab.Screen name='NavFavorite' component={NavFavorite}
        options={{
          title: 'Favoritos',
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({ color, size }) => <Icon name='heart' color={color} size={size} />
        }}
      />
    </Tab.Navigator>
  )
}

export default NavTab

function renderPokeballImage() {
  return (
    <Image
      source={require("../assets/img/pokeball.png")}
      style={styles.pokeballIcon}
    />
  )
}

const styles = StyleSheet.create({
  pokeballIcon: {
    width: 75,
    height: 75,
    top: -18
  }
})