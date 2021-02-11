import React from 'react';
import {SafeAreaView} from 'react-native';
import GeneralStatusBarColor from './src/components/StatusBarApple/GeneralStatusBarColor';
import {Provider} from 'react-redux';
import store from './src/store/index';
import Routes from './src/routes/index';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Routes />
        <GeneralStatusBarColor barStyle="light-content" />
      </Provider>
    </>
  );
};

export default App;
