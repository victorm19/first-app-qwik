import { $, component$ } from "@builder.io/qwik";
import { type DocumentHead, useNavigate } from "@builder.io/qwik-city";
import { PokemonImage } from "~/components/pokemons/pokemon-image";;
import { usePokemonGame } from "~/hooks/use-pokemon-game";

export default component$(() => {
  const nav = useNavigate();
  const {
    isPokemonVisible,
    nextPokemon,
    pokemonId,
    prePokemon,
    showBackImage,
    toggleFromBack,
    toggleVisible,
  } = usePokemonGame();

  const goToPokemon = $(() => {
    nav(`/pokemon/${pokemonId.value}`);
  });

  return (
    <>
      <span class="text-2xl">Buscador simple</span>

      <span class="text-9xl"> {pokemonId.value}</span>
      <div
        onClick$={async () => {
          await goToPokemon();
        }}
      >
        <PokemonImage
          id={pokemonId.value}
          backImage={showBackImage.value}
          isVisible={isPokemonVisible.value}
        />
      </div>

      <div class="mt-2">
        <button class="btn btn-primary mr-2" onClick$={() => prePokemon()}>
          Anterior
        </button>
        <button class="btn btn-primary mr-2" onClick$={() => nextPokemon()}>
          Siguiente
        </button>
        <button class="btn btn-primary mr-2" onClick$={() => toggleFromBack()}>
          Voltear
        </button>
        <button class="btn btn-primary" onClick$={() => toggleVisible()}>
          {isPokemonVisible.value ? "Ocultar" : "Revelar"}
        </button>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Poke Qwik",
  meta: [
    {
      name: "description",
      content: "Esta es mi primera aplicación en qwik",
    },
  ],
};
