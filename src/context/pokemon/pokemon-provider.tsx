import {
  Slot,
  component$,
  useContextProvider,
  useStore,
  useVisibleTask$,
} from "@builder.io/qwik";
import {
  PokemonGameContext,
  type PokemonGameState,
} from "./pokemon-game.context";
import {
  PokemonListContext,
  type PokemonListState,
} from "./pokemon-list.context";

export const PokemonProvider = component$(() => {
  const pokemonGame = useStore<PokemonGameState>({
    pokemonId: 1,
    isPokemonVisible: true,
    showBackImage: false,
  });

  const pokemonList = useStore<PokemonListState>({
    pokemons: [],
    currentPage: 0,
    isLoading: false,
    endScroll: false,
  });

  useContextProvider(PokemonGameContext, pokemonGame);
  useContextProvider(PokemonListContext, pokemonList);

  useVisibleTask$(() => {
    if(localStorage.getItem('pokemon-game')) {
      var { isPokemonVisible = true, pokemonId = 1, showBackImage = false} = JSON.parse(localStorage.getItem('pokemon-game')!) as PokemonGameState;

      pokemonGame.isPokemonVisible = isPokemonVisible;
      pokemonGame.pokemonId = pokemonId;
      pokemonGame.showBackImage = showBackImage;
    }
    
  });

  useVisibleTask$(({ track }) => {
    track(() => [
      pokemonGame.isPokemonVisible,
      pokemonGame.pokemonId,
      pokemonGame.showBackImage,
    ]);

    localStorage.setItem('pokemon-game', JSON.stringify(pokemonGame));
  });

  return <Slot />;
});
