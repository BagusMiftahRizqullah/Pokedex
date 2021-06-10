import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {moderateScale} from 'react-native-size-matters';

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color="blue" size={moderateScale(40)} />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    height: heightPercentageToDP(100),
    justifyContent: 'center',
    alignContent: 'center',
  },
});
