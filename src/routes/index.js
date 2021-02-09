import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/courses/index';

const Stack = createStackNavigator();

const headerStyle = {
  headerShown: true,
  headerBackTitleVisible: false,
  headerTintColor: 'black',
  headerStyle: {
    height: 100,
    elevation: 0,
    shadowOpacity: 0,
    backgroundColor: '#FF8686',
  },
  headerTitleStyle: {
    fontSize: 16,
    color: 'white',
    fontFamily: 'HelveticaNeue Medium',
  },
};

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Initial">
        <Stack.Screen
          name="Initial"
          component={Home}
          options={{...headerStyle, title: 'Loja virtual'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routes;
