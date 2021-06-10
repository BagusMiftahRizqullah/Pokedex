import {put, takeEvery, takeLatest} from 'redux-saga/effects';
import {GET_POKEMON_DETAIL} from './action';
import axios from 'axios';
import {Alert} from 'react-native';
import {setPokemonList} from './action';

function* callMe(action) {
  try {
    const res = yield axios.get(
      `https://pokeapi.co/api/v2/pokemon/?limit=${action.payload}`,
      {
        validateStatus: status => status < 500,
      },
    );
    console.log(res, 'ini res');

    if (res.status === 200) {
      yield put(setPokemonList(res.data.results));
    } else {
      Alert.alert('Error', res.data.message);
    }
  } catch (error) {
    console.log(error);
  }
}

export function* SagaHome() {
  yield takeLatest(GET_POKEMON_DETAIL, callMe);
}
