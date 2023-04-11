import { useQuery } from '@apollo/client'
import Image from 'next/image'
import { GET_POKEMONS } from 'query/getPokemons'
import React from 'react'
import { PokemonType } from 'types/pokemon'

const gqlVariables = {
  limit: 10,
  offset: 1,
}
const ListPokemon = () => {
  const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: gqlVariables,
  })
  if (loading) return <div>'Loading...'</div>
  if (error) return <div>`Error! ${error.message}`</div>
  return (
    <div>
      {data &&
        data?.pokemons?.results?.map((pokemon: PokemonType, index: number) => {
          return (
            <div key={index}>
              <Image src={pokemon.image} alt={pokemon.name} />
              <div>{pokemon.name}</div>
            </div>
          )
        })}
    </div>
  )
}

export default ListPokemon
