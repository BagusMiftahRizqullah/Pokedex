import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Redux
import {Store, persistor} from './src/Store/Store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';

// Screen
import Home from './src/Screen/Home/Home';
import Detail from './src/Screen/Detail/Detail';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={Store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              options={{headerShown: false}}
              name="Home"
              component={Home}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name="Detail"
              component={Detail}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
