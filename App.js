import React from 'react'
import {RootNavigator} from './src/navigation/MainStackNavigator'
import { LogBox } from 'react-native';

import { Provider } from 'react-redux';
import configStore from './src/redux/config_store';

export default function App() {
  const store = configStore();

  LogBox.ignoreLogs(['Setting a timer']);

  return(
  <Provider store={ store }>
    <RootNavigator/>
  </Provider>
  );
   
}