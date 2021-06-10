import {SET_POKEMON_DETAIL, SET_POKEMON_LIST} from './action';

const initialState = {
  pokemonList: [],
};

const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMON_LIST:
      console.log('ini Reducer');
      return {
        ...state,
        pokemonList: action.payload,
      };
    case SET_POKEMON_DETAIL:
      return {
        ...state,
        pokemonList: action.payload,
      };
    default:
      return state;
  }
};

export default HomeReducer;
