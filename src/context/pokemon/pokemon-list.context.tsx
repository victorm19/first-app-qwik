import { createContextId } from "@builder.io/qwik";
import { SmallPokemon } from "~/interfaces";


export interface PokemonListState {
    currentPage: number;
    isLoading: boolean;
    endScroll: boolean;
    pokemons: SmallPokemon[];
}

export const PokemonListContext = createContextId<PokemonListState>('pokemon.list-context');