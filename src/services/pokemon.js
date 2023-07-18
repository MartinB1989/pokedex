import httpClient from "../utils/axios-instance";

const pokemonService = () => {
  const getPokemonList = async (limit = 30, offset = 0) => {
    const  { data } = await httpClient.get(`pokemon?limit=${limit}&offset=${offset}`)
    return data
  }

  const getPokemonDetail = async (pokemonUrlApi) => {
    const { data } = await httpClient(pokemonUrlApi)
    return data
  }
  return {
    getPokemonList,
    getPokemonDetail
  }
}

export default pokemonService