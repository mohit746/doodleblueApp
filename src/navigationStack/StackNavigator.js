import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeContainer from '../screens/home/HomeContainer';
import MyCartContainer from '../screens/mycart/MyCartContainer';
import 'react-native-gesture-handler';
const Stack = createStackNavigator();

const StackNavigator = (props) => {
  console.log('StackNavigator', 'inside method... ' + JSON.stringify(props));
  return (
    <Stack.Navigator headerMode={'none'} initialRouteName="HomeContainer">
      <Stack.Screen name="HomeContainer" component={HomeContainer} />
      <Stack.Screen name="MyCartContainer" component={MyCartContainer} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
