import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import pokemonService from '../services/pokemon'
import PokemonList from '../components/PokemonList'
import { POKEMON_TYPE_COLORS } from '../utils/pokemon-color'

const Pokedex = () => {
  const [pokemonList, setPokemonList] = useState([])

  useEffect(() => {
    (async () => {
      await loadPokemons()
    })()
  },[])
  const getPokemonColor = type => {
    return POKEMON_TYPE_COLORS[type.toLowerCase()]
  }
  const loadPokemons = async () => {
    try {
      const pokemonData = await pokemonService().getPokemonList()
      const pokemonInfoList = []
      pokemonData.results.forEach(async element => {
        console.log(element.url)
        const currentPokemon = await pokemonService().getPokemonDetail(element.url)
        pokemonInfoList.push({
          id: currentPokemon.id,
          name: element.name,
          image: currentPokemon.sprites.front_default,
          color: getPokemonColor(currentPokemon.types[0].type.name)
        })
      });
      setPokemonList(pokemonInfoList)
    } catch (error) {
      console.log('Error', error)
    }
  }

  return (
    <View>
      <PokemonList pokemons={pokemonList}/>
    </View>
  )
}

export default Pokedex