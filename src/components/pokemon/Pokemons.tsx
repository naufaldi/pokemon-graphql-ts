import Image from 'next/image'
import React, { FC } from 'react'
import { PokemonType } from 'types/pokemon'

const Pokemons: FC<{ pokemon: PokemonType; index: number }> = ({ pokemon, index }) => {
  return (
    <div key={index}>
      <Image src={pokemon.image} alt={pokemon.name} width={500} height={500} />
      <div>{pokemon.name}</div>
    </div>
  )
}

export default Pokemons
