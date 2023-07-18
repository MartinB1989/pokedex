import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import PokemonCard from './PokemonCard'

const PokemonList = ({pokemons}) => {
  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      horizontal={false}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => {
        return (
          <PokemonCard
            name={item.name}
            src={item.image}
            id={item.id}
            colorType={item.color}
          />
        )
      }}
    />
  )
}

// const styles = StyleSheet.create({

// })

export default PokemonList