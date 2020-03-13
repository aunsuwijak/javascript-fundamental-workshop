import { getPokemonData } from "../services";

async function getPokemonDataAsync() {
  const { base_experience, height, weight } = await getPokemonData();
  return { base_experience, height, weight };
}

export default getPokemonDataAsync;
