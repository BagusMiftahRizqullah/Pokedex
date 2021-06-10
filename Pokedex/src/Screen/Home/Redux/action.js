export const SET_POKEMON_LIST = 'SET_POKEMON_LIST';
export const GET_POKEMON_DETAIL = 'GET_POKEMON_DETAIL';

export const getPokemonDetail = payload => {
  return {
    type: GET_POKEMON_DETAIL,
    payload,
  };
};

export const setPokemonList = payload => {
  return {
    type: SET_POKEMON_LIST,
    payload,
  };
};
