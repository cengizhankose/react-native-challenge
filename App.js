import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {store} from './src/store';
import {Provider} from 'react-redux';

import Home from './src/pages/Home';
import userDesc from './src/pages/userDesc';
import UserAdd from './src/pages/UserAdd';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="UserAdd" component={UserAdd} />
          <Stack.Screen name="UserDescription" component={userDesc} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
