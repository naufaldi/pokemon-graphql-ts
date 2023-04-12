import { useQuery } from '@apollo/client'
import Loading from 'components/common/Loading'
import { GET_POKEMONS } from 'query/getPokemons'
import React from 'react'
import { useErrorBoundary } from 'react-error-boundary'
import { PokemonType } from 'types/pokemon'

import Pokemons from './Pokemons'

const gqlVariables = {
  limit: 10,
  offset: 1,
}
const ListPokemon = () => {
  const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: gqlVariables,
  })
  const { showBoundary } = useErrorBoundary()
  if (loading) return <Loading />
  if (error) {
    showBoundary(error)
    return <div>Error</div>
  }
  return (
    <>
      {data &&
        data?.pokemons?.results?.map((pokemon: PokemonType, index: number) => {
          return <Pokemons key={index} pokemon={pokemon} index={index} />
        })}
    </>
  )
}

export default ListPokemon
