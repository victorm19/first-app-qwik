import { component$ } from "@builder.io/qwik";
import { routeLoader$, RequestEventLoader } from "@builder.io/qwik-city";
import { PokemonImage } from "~/components/pokemons/pokemon-image";
import { usePokemonGame } from "~/hooks/use-pokemon-game";

export const usePokemonId = routeLoader$<number>(
  ({ params, redirect }: RequestEventLoader) => {
    const id = Number(params.id);
    if (isNaN(id) || id <= 0 || id > 1000) redirect(301, "/");

    return id;
  }
);

export default component$(() => {
  const pokemonId = usePokemonId();
  const { isPokemonVisible, showBackImage, toggleFromBack, toggleVisible } =
    usePokemonGame();

  return (
    <>
      <span class="text-5xl">Pokemon Id: {pokemonId.value}</span>
      <PokemonImage
        id={pokemonId.value}
        isVisible={isPokemonVisible.value}
        backImage={showBackImage.value}
      />
      <div class="mt-2">
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
