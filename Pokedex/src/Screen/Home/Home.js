import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {getPokemonDetail} from './Redux/action';
import Loading from '../../Component/Loading';

const Home = () => {
  const DetailPokemon = useSelector(state => {
    return state.Home.pokemonList;
  });
  const dispatch = useDispatch();

  const getListData = () => {
    // Tanpa Action
    dispatch({type: 'GET_POKEMON_DETAIL', payload: 20});

    // Menggunakan Action
    // dispatch(getPokemonDetail(20));
  };

  useEffect(() => {
    getListData();
  }, []);

  console.log(DetailPokemon, '<==pokemon');
  return (
    <View>
      {DetailPokemon.length <= 0 ? (
        <Loading />
      ) : (
        DetailPokemon.map((e, i) => <Text>{e.name}</Text>)
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
