import React from 'react';
import {StatusBar} from 'react-native';
import Routes from './src/routes/index';

const App = () => {
  return (
    <>
      <Routes />
      <StatusBar barStyle="light-content" />
    </>
  );
};

export default App;
