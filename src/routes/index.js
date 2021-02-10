import React from 'react';
import {Icon} from 'react-native-elements';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/courses';
import Payment from '../screens/payments';

const Stack = createStackNavigator();

const headerStyle = {
  headerShown: true,
  headerRight: () => (
    <Icon
      containerStyle={{marginRight: 18}}
      type="ionicon"
      name="cart-outline"
      color="white"
      onPress={() => alert('ola')}
    />
  ),
  headerBackTitleVisible: false,
  headerTintColor: 'white',
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
        <Stack.Screen
          name="Payment"
          component={Payment}
          options={{...headerStyle, title: 'Pagamento com cartão'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routes;
