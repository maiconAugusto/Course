import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/store/index';
import Routes from './src/routes/index';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Routes />
        <StatusBar barStyle="light-content" />
      </Provider>
    </>
  );
};

export default App;
