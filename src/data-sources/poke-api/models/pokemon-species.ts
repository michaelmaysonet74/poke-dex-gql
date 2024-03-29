import { EntryLanguage, FlavorTextEntries } from "./flavor-text-entry";

export type SpeciesId = string;

export interface EvolutionFrom {
  name?: string | null;
  url?: string | null;
}

export interface Genera {
  genus?: string | null;
  language?: EntryLanguage | null;
}

export interface PokemonSpecies extends FlavorTextEntries {
  evolves_from_species?: EvolutionFrom;
  genera?: Genera[];
}
