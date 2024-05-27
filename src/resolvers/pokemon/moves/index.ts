import { MetaPokemon } from "..";
import { ResolverContext } from "../../../context/types";

export const getMoves = (
  parent: MetaPokemon,
  _: null,
  ctx: ResolverContext
): string[] => {
  const { moves = [] } = parent?._meta?.pokemonDetails ?? {};

  const {
    helpers: { title },
  } = ctx;

  return moves.map(({ move }) => title({ str: move.name }));
};
