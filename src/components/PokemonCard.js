import { View, Text, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import React, { useCallback, useEffect } from 'react'

const PokemonCard = ({name, src, id, colorType}) => {

  const [fontsLoaded] = useFonts({
    MontserratAltRegular: require('../assets/font/montserrat_alternates/MontserratAlternates-Regular.ttf')
  })
  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync()
    }
    prepare()
  }, [])

  const onLayout = useCallback(async () => {
    if(fontsLoaded) {
      await SplashScreen.hideAsync()
    }

  }, [fontsLoaded])

  if(!fontsLoaded) return null

  const goToPokemon = () => {
    console.log(name)
  }
  const bgColorType = { backgroundColor: colorType, ...$style.card}
  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={$style.mainContainer}>
        <View style={ bgColorType }>
          <Text style={$style.text}>{name}</Text>
          <Text style={$style.text}>#{`${id}`.padStart(3,0)}</Text>
          <Image
            source={{ uri: src }}
            style={$style.img}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const $style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 2
  },

  card: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },

  img: {
    width: 130,
    height: 130,
  },

  text: {
    // textAlign: 'center'
    fontFamily: 'MontserratAltRegular',
    fontSize: 18
  }
})

export default PokemonCard